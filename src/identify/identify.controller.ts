import { Controller, Get } from '@nestjs/common';

@Controller('Identify')
export class IdentifyController {
    /**
     * Renvoyer les données du serveur en information
     */
    @Get()
    async idOAI() {
        return "Identifiant serveur OAI";
    }
}
