import { Controller, Get, Param } from '@nestjs/common';

@Controller('ListMetadataFormats')
export class ListMetadataFormatsController {
    /**
     * Get list of all metadate formats
     */
    @Get('')
    async listFormats(): Promise<object>  {
        return new Object();
    }
    /**
     * Get a specific metadata format
     * @param identifier Identifier of the Metadata format
     */
    @Get('/:identifier')
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
