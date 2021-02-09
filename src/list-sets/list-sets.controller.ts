import { Controller, Get, Param, Header } from '@nestjs/common';
import { PmhService } from '../providers/services/pmh/pmh.service';

@Controller('ListSets')
export class ListSetsController {
    constructor(private pmhServ:PmhService){}
    /**
     * Get sets list from server
     * @param resumptionToken resumptionToken choosen
     */
    @Get('/:resumptionToken')
    @Header('Content-Type', 'text/xml')
    async listFormat(@Param('resumptionToken') resumptionToken): Promise<object>  {
        return new Object();
    }
    /**
     * Return error if any
     */
    @Get()
    @Header('Content-Type', 'text/xml')
    async sets() {
        return this.pmhServ.getSets();
    }
}
