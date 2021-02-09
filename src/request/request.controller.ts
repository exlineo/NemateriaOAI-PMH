import { Controller, Query, Get, Res } from '@nestjs/common';
import { PmhService } from '../providers/services/pmh/pmh.service';

@Controller('request')
export class RequestController {
    /**
     * Usual way from OAI PMH servers using verb
     */
    constructor(private pmhServ:PmhService){}

    // @Get()
    // @Redirect('books')
    // redirect(){}

    // @Get()
    // redirect(@Res() res) {
    //      return res.redirect('/books/greet');
    //  }

    @Get()
    async checkVerb(@Query('verb') verb){
        switch(verb){
            case 'Identify':
                this.pmhServ.getIdentify();
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
