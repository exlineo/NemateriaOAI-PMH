import { PmhService } from '../providers/services/pmh/pmh.service';
export declare class ListMetadataFormatsController {
    private readonly pmhServ;
    constructor(pmhServ: PmhService);
    listFormats(): Promise<any>;
    listFormat(identifier: any): Promise<object>;
    erreur(): Promise<string>;
}
