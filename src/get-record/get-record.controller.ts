import { Controller, Get, Param } from '@nestjs/common';

@Controller('GetRecord')
export class GetRecordController {
    @Get('*')
    async erreur(@Param('identifier') identifier, @Param('metadataPrefix') metadataPrefix) {
        return "Merci de vérifier les paramètres transmis dans votre URL";
    }
    /**
     * 
     * @param identifier 
     */
    @Get('/:identifier/:metadataPrefix')
    async findRecord(@Param('identifier') identifier, @Param('metadataPrefix') metadataPrefix): Promise<object> {
        return new Object();
    }
}
