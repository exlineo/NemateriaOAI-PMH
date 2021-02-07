import { Controller, Param, Get, Header } from '@nestjs/common';
import { unwatchFile } from 'fs';
import { PmhService } from '../providers/services/pmh/pmh.service';
import { SetXml } from '../providers/xml';
@Controller('ListIdentifiers')
export class ListIdentifiersController {

    constructor(private readonly pmhServ:PmhService, private readonly xml:SetXml){}
    /**
     * Get all identifiers with params as criterias
     * @param from Date from
     * @param until Date until
     * @param metadataPrefix Prefix for metadata type extracted (oai_pc by default)
     * @param set 
     * @param resumptionToken 
     */
    @Get('/:from/:until/:metadataPrefix/:set/:resumptionToken')
    @Header('Content-Type', 'text/xml')
    async listIDs(@Param('from') from, @Param('until') until, @Param('metadataPrefix') metadataPrefix, @Param('set') set, @Param('resumptionToken') resumptionToken): Promise<object>  {
        return await new Object();
    }
    /**
     * Return error if any
     */
    @Get('*')
    async erreur() {
        return "Merci de vérifier les paramètres transmis dans votre URL";
    }
}
