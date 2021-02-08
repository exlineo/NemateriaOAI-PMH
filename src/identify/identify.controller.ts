import { Controller, Get, Param, Header } from '@nestjs/common';
import { PmhService } from 'src/providers/services/pmh/pmh.service';
import { ID, IdI } from '../models/interfaces/id-i.interface';
import { IdentifyXml } from '../providers/xml/identify-xml';

@Controller('Identify')
export class IdentifyController {
    constructor(private readonly pmhServ:PmhService){}
    /**
     * Renvoyer les données du serveur en information
     */
    @Get()
    @Header('Content-Type', 'text/xml')
    async infosOAI() {
        return this.pmhServ.getIdentify();
    }
    @Get(':id')
    @Header('Content-Type', 'text/xml')
    async infosIdOAI(@Param('id') id) {
        return this.pmhServ.getIdIdentify(id);
    }
}
