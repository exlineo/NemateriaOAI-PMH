import { PmhService } from '../providers/services/pmh/pmh.service';
export declare class ListSetsController {
    private pmhServ;
    constructor(pmhServ: PmhService);
    listFormat(resumptionToken: any): Promise<object>;
    sets(): Promise<string>;
}
