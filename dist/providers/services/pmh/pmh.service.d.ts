import { Model } from 'mongoose';
import { GenericI } from '../../../models/interfaces/generic.interface';
import { IdentifyXml } from '../../xml/identify-xml';
import { RecordXml } from '../../xml/record-xml';
import { SetXml } from '../../xml/set-xml';
import { FiltreXml } from '../../xml/filtre-xml';
export declare class PmhService {
    private readonly genModel;
    private readonly noticeModel;
    private readonly idModel;
    private readonly setModel;
    private readonly filtreModel;
    private readonly idXml;
    private readonly recXml;
    private readonly setXml;
    private readonly filtreXml;
    constructor(genModel: Model<GenericI>, noticeModel: Model<GenericI>, idModel: Model<GenericI>, setModel: Model<GenericI>, filtreModel: Model<GenericI>, idXml: IdentifyXml, recXml: RecordXml, setXml: SetXml, filtreXml: FiltreXml);
    getIdentify(): Promise<string>;
    getIdIdentify(id: any): Promise<string>;
    getListIdentifiers(): Promise<string>;
    getistMedataFormats(): Promise<string>;
    getSet(id: any): Promise<any>;
    getSets(): Promise<string>;
    getRecords(): Promise<void>;
    getRecord(id: any): Promise<void>;
}
