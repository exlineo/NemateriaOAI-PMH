import { Controller, Get, Param, Header } from '@nestjs/common';
import { PmhService } from '../providers/services/pmh/pmh.service';

@Controller('ListRecords')
export class ListRecordsController {

    constructor(private pmhServ:PmhService){}
    /**
     * Return error if any
     */
    @Get()
    @Header('Content-Type', 'text/xml')
    async listeNotices(): Promise<any> {
        return this.pmhServ.getRecords();
    };
    /**
     * Rechercher les documents d'un SET
     * @param set SET dont on cherche les enregistrements
     */
    @Get('/set/:set')
    @Header('Content-Type', 'text/xml')
    async parSet(@Param('set') set): Promise<any>  {
        return this.pmhServ.getRecordsSet(set);
    }
    /**
     * Lister les documents en lien avec un espace de noms (oai_dc, oai_nema)
     * @param prefix Préfix OAI de recherche
     */
    @Get('/metadataPrefix/:prefix')
    @Header('Content-Type', 'text/xml')
    async parMeta(@Param('prefix') prefix): Promise<any>  {
        return await this.pmhServ.getRecordsMeta(prefix);
    }
    /**
     * Rechercher à partir de
     * @param from Date de recherche (à partir de)
     */
    @Get('/from/:from')
    @Header('Content-Type', 'text/xml')
    async parFrom(@Param('from') from): Promise<any>  {
        return this.pmhServ.getRecordsFrom(from);
    };
    /**
     * Rechercher dans un écart de dates
     * @param from Date de recherche (à partir de)
     * @param until Date de recherche (jusqu'à)
     */
    @Get('/from/:from/until/:until')
    @Header('Content-Type', 'text/xml')
    async parFromUntil(@Param('from') from, @Param('until') until): Promise<any>  {
        return this.pmhServ.getRecordsFromUntil(from, until);
    }
    
    /**
     * Rechercher dans un écart de dates avec le préfix OAI
     * @param from Date de recherche (à partir de)
     * @param until Date de recherche (jusqu'à)
     * @param metadataPrefix prefix OAI
     */
    @Get('/from/:from/until/:until/metadataPrefix/:metadataPrefix')
    @Header('Content-Type', 'text/xml')
    async parFromUntilMeta(@Param('from') from, @Param('until') until, @Param('metadataPrefix') meta): Promise<any>  {
        return this.pmhServ.getRecordsFUM(from, until, meta);
    }
    
    /**
     * Rechercher dans une SET avec des paramètres spécifiques
     * @param from Date de recherche (à partir de)
     * @param until Date de recherche (jusqu'à)
     * @param metadataPrefix prefix OAI
     * @param SET dans lequel recherche
     */
    @Get('/from/:from/until/:until/metadataPrefix/:metadataPrefix/set/:set')
    @Header('Content-Type', 'text/xml')
    async parPresqueTout(@Param('from') from, @Param('until') until, @Param('metadataPrefix') metadataPrefix, @Param('set') set): Promise<object>  {
        return new Object();
    }
    /**
     * Get all records with params as criterias
     * @param from Date from
     * @param until Date until
     * @param metadataPrefix Prefix for metadata type extracted (oai_pc by default)
     * @param set Set à moissonner
     * @param resumptionToken un token renvoyé en cas d'erreurs (non encore implémenté)
     */
    @Get('/from/:from/until/:until/metadataPrefix/:metadataPrefix/set/:set/resumptionToken/:resumptionToken')
    @Header('Content-Type', 'text/xml')
    async parTout(@Param('from') from, @Param('until') until, @Param('metadataPrefix') metadataPrefix, @Param('set') set, @Param('resumptionToken') resumptionToken): Promise<object>  {
        return new Object();
    }
}
