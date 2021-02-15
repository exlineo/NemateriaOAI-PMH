import { PmhService } from '../providers/services/pmh/pmh.service';
export declare class RequestController {
    private pmhServ;
    constructor(pmhServ: PmhService);
    checkVerb(verb: any): Promise<string>;
}
