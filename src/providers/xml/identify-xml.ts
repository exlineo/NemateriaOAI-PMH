import { Injectable } from '@nestjs/common';

import { ID } from '../../models/interfaces/id-i.interface';

@Injectable()
export class IdentifyXml {
    /**
     * Identify XML renvoyé peuplé des données d'un objet de la base
     * @param id Object ID de peuplement de la chaîne
     */
    idenfityXml(id: ID) {
        let idXml: ID = id;
        return `<Identify>
                    <repositoryName>Dépôt Nemateria</repositoryName>
                    <baseURL>${idXml.baseurl}</baseURL>
                    <protocolVersion>2.0</protocolVersion>
                    <adminEmail>${idXml.adminemail}</adminEmail>
                    <earliestDatestamp>${idXml.earliest}</earliestDatestamp>
                    <deletedRecord>${idXml.deleterecord}</deletedRecord>
                    <granularity>${idXml.granularity}</granularity>
                    <description>
                        <oai-identifier xmlns='http://www.openarchives.org/OAI/2.0/oai-identifier' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/oai-identifier http://www.openarchives.org/OAI/2.0/oai-identifier.xsd'>        
                            <scheme>${idXml.scheme}</scheme>        
                            <repositoryIdentifier>${idXml.repoid}</repositoryIdentifier>        
                            <delimiter>${idXml.delimiter}</delimiter>        
                            <sampleIdentifier>${idXml.sampleid}</sampleIdentifier>
                        </oai-identifier>
                    </description>
                    <description>
                        <eprints 
                            xmlns="http://www.openarchives.org/OAI/1.1/eprints"
                            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                            xsi:schemaLocation="http://www.openarchives.org/OAI/1.1/eprints 
                            http://www.openarchives.org/OAI/1.1/eprints.xsd">
                            <content>
                                <URL>http://www.nemateria.eu</URL>
                                <text>Collections diverses</text>
                            </content>
                            <metadataPolicy/>
                            <dataPolicy/>
                        </eprints>
                        </description>
                        <description>
                        <friends 
                            xmlns="http://www.openarchives.org/OAI/2.0/friends/" 
                            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                            xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/friends/
                            http://www.openarchives.org/OAI/2.0/friends.xsd">
                            <baseURL>http://vps550598.ovh.net/nemateriaoai/</baseURL>
                        </friends>
                    </description>
                </Identify>`;
    }
    // Composer le XML complet
    xml(baseurl: string, identify: string): string{
        return `<?xml version='1.0' encoding='UTF-8'?>
        <?xml-stylesheet type='text/xsl' href='http://vps550598.ovh.net/oai/xml/oai2.xsl' ?>
            <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>
            <responseDate>${new Date(Date.now()).toLocaleDateString("fr-FR")}</responseDate>
            <request verb='Identify'>${baseurl}</request>
            ${identify}
        </OAI-PMH>`;
    }
    /**
     * Modèles XML pour les ID
     */
    // setIdentifyXml(ID:any):string{
    setIdentifyXml(id:ID): string {
        return this.xml(id.baseurl, this.idenfityXml(id));
    }
    /**
     * Obtenir la liste des identifiers
     * @param ids Tableau des 'Idenfify' reçus du serveur
     */
    setListIdentifyXml(ids: Array<any>):string {
        let str = '';
        if (Array.isArray(ids)) {
            ids.forEach(i => str += this.idenfityXml(i));
        }
        return this.xml(ids[0].baseurl, str);
    }
}
