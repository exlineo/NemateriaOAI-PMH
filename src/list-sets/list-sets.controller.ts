import { Controller, Get, Param } from '@nestjs/common';

@Controller('ListSets')
export class ListSetsController {
    /**
     * Get sets list from server
     * @param resumptionToken resumptionToken choosen
     */
    @Get('/:identifier')
    async listFormat(@Param('resumptionToken') resumptionToken): Promise<object>  {
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