import { Controller, Get, Response, Header } from '@nestjs/common';

const identify_xml:XMLDocument = new XMLDocument();

@Controller('Identify')
export class IdentifyController {
    /**
     * Renvoyer les données du serveur en information
     */
    @Get()
    @Header('Content-Type', 'text/xml')
    async infosOAI() {
        return 'Identifiant serveur OAI';
    }
    /**
     * SetUp XML to respond to Identify
     */
    setXML(){
        const xml = `<?xml version='1.0' encoding='UTF-8'?><?xml-stylesheet type='text/xsl' href='oai2.xsl' ?>
        <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>
          <responseDate>2020-09-30T19:52:58Z</responseDate>
          <request verb='Identify'>https://vps550589.ovh.net/nemateria-oai</request>
          <Identify>
            <repositoryName>Dépôt Nemateria</repositoryName>
            <baseURL>https://vps550589.ovh.net/nemateria-oai</baseURL>
            <protocolVersion>2.0</protocolVersion>
            <adminEmail>contact@exlineo.com</adminEmail>
            <earliestDatestamp>2020-09-30T22:24:00Z</earliestDatestamp>
            <deletedRecord>no</deletedRecord>
            <granularity>YYYY-MM-DDThh:mm:ssZ</granularity>
            <description>
              <oai-identifier xmlns='http://www.openarchives.org/OAI/2.0/oai-identifier' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/oai-identifier http://www.openarchives.org/OAI/2.0/oai-identifier.xsd'>        
                <scheme>oai</scheme>        
                <repositoryIdentifier>exlineo.nemateria.net</repositoryIdentifier>        
                <delimiter>:</delimiter>        
                <sampleIdentifier>oai:exlineo.nemateria.net:153</sampleIdentifier></oai-identifier></description>
          </Identify>
        </OAI-PMH>`;
    }
}
