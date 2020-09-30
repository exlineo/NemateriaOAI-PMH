import { Controller, Get, Param } from '@nestjs/common';

@Controller('GetRecord')
export class GetRecordController {
    
    /**
     * 
     * @param identifier 
     */
    @Get('/:identifier/:metadataPrefix')
    async findRecord(@Param('identifier') identifier, @Param('metadataPrefix') metadataPrefix): Promise<object> {
        return new Object();
    }
    /**
     * 
     * @param identifier Return error if any
     * @param metadataPrefix 
     */
    @Get('*')
    async erreur() {
        return "Merci de vérifier les paramètres transmis dans votre URL";
    }
}
