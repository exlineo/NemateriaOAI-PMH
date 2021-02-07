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
    getIdentify(id: any): Promise<GenericI>;
    getListIdentifiers(): Promise<GenericI[]>;
    getistMedataFormats(): Promise<string>;
    geSet(id: any): Promise<any>;
    geSets(): Promise<any[]>;
    getRecords(): Promise<void>;
    getRecord(id: any): Promise<void>;
}
