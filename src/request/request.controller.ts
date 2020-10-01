import { Controller, Query, Get } from '@nestjs/common';

@Controller('request')
export class RequestController {
    /**
     * Usual way from OAI PMH servers using verb
     */
    constructor(){

    }
    @Get()
    checkVerb(@Query('verb') verb){
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
