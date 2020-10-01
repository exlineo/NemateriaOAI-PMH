import { Controller, Param, Get } from '@nestjs/common';
import { unwatchFile } from 'fs';

@Controller('ListIdentifiers')
export class ListIdentifiersController {
    /**
     * Get all identifiers with params as criterias
     * @param from Date from
     * @param until Date until
     * @param metadataPrefix Prefix for metadata type extracted (oai_pc by default)
     * @param set 
     * @param resumptionToken 
     */
    @Get('/:from/:until/:metadataPrefix/:set/:resumptionToken')
    async listIDs(@Param('from') from, @Param('until') until, @Param('metadataPrefix') metadataPrefix, @Param('set') set, @Param('resumptionToken') resumptionToken): Promise<object>  {
        return new Object();
    }
    /**
     * Return error if any
     */
    @Get('*')
    async erreur() {
        return "Merci de vérifier les paramètres transmis dans votre URL";
    }
}