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
        // const xml = ;
    }
}
