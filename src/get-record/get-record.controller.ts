import { Controller, Get, Param, Header } from '@nestjs/common';

@Controller('/GetRecord')
export class GetRecordController {
    
    /**
     * Requête avec un identifiant
     * @param identifier 
     */
    @Get('/:identifier')
    @Header('Content-Type', 'text/xml')
    async findRecord(@Param('identifier') identifier, @Param('metadataPrefix') metadataPrefix): Promise<object> {
        return new Object();
    }
    /**
     * Requête avec un identifiant et un prefix
     * @param identifier Identifiant unique
     * @param metadataPrefix Préfix sur le type de données à moissonner. Par défaut oai_dc
     */
    @Get('/:identifier/:metadataPrefix')
    @Header('Content-Type', 'text/xml')
    async findRecordPrefix(@Param('identifier') identifier, @Param('metadataPrefix') metadataPrefix): Promise<object> {
        return new Object();
    }
    /**
     * 
     * @param identifier Return error if any
     * @param metadataPrefix 
     */
    @Get()
    async erreur() {
        return "Merci de vérifier les paramètres transmis dans votre URL";
    }
}
