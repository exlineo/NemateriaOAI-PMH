import { PmhService } from '../providers/services/pmh/pmh.service';
export declare class ListRecordsController {
    private pmhServ;
    constructor(pmhServ: PmhService);
    listeNotices(): Promise<any>;
    parSet(set: any): Promise<any>;
    parMeta(prefix: any): Promise<any>;
    parFrom(from: any): Promise<any>;
    parFromUntil(from: any, until: any): Promise<any>;
    parFromUntilMeta(from: any, until: any, meta: any): Promise<any>;
    parPresqueTout(from: any, until: any, metadataPrefix: any, set: any): Promise<object>;
    parTout(from: any, until: any, metadataPrefix: any, set: any, resumptionToken: any): Promise<object>;
}
