import { PmhService } from '../providers/services/pmh/pmh.service';
import { SetXml } from '../providers/xml';
export declare class ListIdentifiersController {
    private readonly pmhServ;
    private readonly xml;
    constructor(pmhServ: PmhService, xml: SetXml);
    listIDs(from: any, until: any, metadataPrefix: any, set: any, resumptionToken: any): Promise<object>;
    erreur(): Promise<string>;
}
