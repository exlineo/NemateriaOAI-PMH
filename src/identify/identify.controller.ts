import { Controller, Get, Response, Header } from '@nestjs/common';
import { ID, IdI } from '../models/interfaces/id-i.interface';
import { IdentifyXml } from '../providers/xml/identify-xml';

@Controller('Identify')
export class IdentifyController {
    constructor(private readonly idXml:IdentifyXml){}
    /**
     * Renvoyer les données du serveur en information
     */
    @Get()
    @Header('Content-Type', 'text/xml')
    async infosOAI() {
        console.log(this.idXml.setIdentifyXml());
        return this.idXml.setIdentifyXml();
    }
}
