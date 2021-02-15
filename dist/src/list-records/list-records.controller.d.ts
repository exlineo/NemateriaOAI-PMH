import { PmhService } from '../providers/services/pmh/pmh.service';
export declare class ListRecordsController {
    private pmhServ;
    constructor(pmhServ: PmhService);
    listeNotices(): Promise<any>;
    parSet(set: any): Promise<any>;
    parMeta(prefix: any): Promise<any>;
    parFrom(from: any): Promise<object>;
    parFromUntil(from: any, until: any): Promise<object>;
    parFromUntilMeta(from: any, until: any, metadataPrefix: any): Promise<object>;
    parPresqueTout(from: any, until: any, metadataPrefix: any, set: any): Promise<object>;
    parTout(from: any, until: any, metadataPrefix: any, set: any, resumptionToken: any): Promise<object>;
}
