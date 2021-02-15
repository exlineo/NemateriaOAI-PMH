import { Controller, Get, Param, Header } from '@nestjs/common';
import { PmhService } from '../providers/services/pmh/pmh.service';

@Controller('ListMetadataFormats')
export class ListMetadataFormatsController {
    constructor(private readonly pmhServ:PmhService){}
    /**
     * Get list of all metadate formats
     */
    @Get()
    @Header('Content-Type', 'text/xml')
    async listFormats(): Promise<any>  {
        return this.pmhServ.getistMedataFormats();
    }
    /**
     * Get a specific metadata format
     * @param identifier Identifier of the Metadata format
     */
    @Get('/:identifier')
    @Header('Content-Type', 'text/xml')
    async listFormat(@Param('identifier') identifier): Promise<object>  {
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
