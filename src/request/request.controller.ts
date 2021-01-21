import { Controller, Query, Get } from '@nestjs/common';
import { PmhService } from '../providers/services/pmh/pmh.service';

@Controller('request')
export class RequestController {
    /**
     * Usual way from OAI PMH servers using verb
     */
    constructor(private pms:PmhService){

    }
    @Get()
    async checkVerb(@Query('verb') verb){
        switch(verb){
            case 'Identify':
                
                break;
            case 'GetRecord':
                break;
            case 'ListIdentifiers':
                break;
            case 'ListMetadataFormats':
                break;
            case 'Identify':
                break;
            case 'ListRecords':
                break;
            case 'ListSets':
                break;
            default:
                return 'nothing'
        }
    }
}
