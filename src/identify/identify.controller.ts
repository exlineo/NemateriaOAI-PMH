import { Controller, Get, Response, Header } from '@nestjs/common';
import { ID, IdI } from '../models/interfaces/id-i.interface';
import { SetXml } from '../providers/xml';

@Controller('Identify')
export class IdentifyController {
    constructor(private readonly xml:SetXml){}
    /**
     * Renvoyer les données du serveur en information
     */
    @Get()
    @Header('Content-Type', 'text/xml')
    async infosOAI() {
        return this.xml.setIdentifyXml(new ID());
    }
}
