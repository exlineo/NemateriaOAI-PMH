import { PmhService } from '../providers/services/pmh/pmh.service';
export declare class RequestController {
    private pms;
    constructor(pms: PmhService);
    checkVerb(verb: any): Promise<string>;
}
