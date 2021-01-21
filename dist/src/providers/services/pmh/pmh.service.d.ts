import { Model } from 'mongoose';
import { GenericI } from '../../../models/interfaces/generic.interface';
export declare class PmhService {
    private genModel;
    constructor(genModel: Model<GenericI>);
    getIdentify(id: any): Promise<GenericI>;
    getListIdentifiers(): Promise<GenericI[]>;
    getistMedataFormats(): void;
    getListRecords(): void;
    getListSets(): void;
}
