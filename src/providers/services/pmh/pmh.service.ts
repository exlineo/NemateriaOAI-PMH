import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { GenericI } from '../../../models/interfaces/generic.interface';
import { GENERIC_MODEL_PROVIDER } from '../../../constants';

@Injectable()
export class PmhService {
    constructor(
        @Inject(GENERIC_MODEL_PROVIDER)
        private genModel:Model<GenericI>) {}
    
    async getIdentify(id) {
        return await this.genModel.findById(id).exec();
    }
    async getListIdentifiers() {
        return await this.genModel.find().exec();
    }
    getistMedataFormats() {

    }
    getListRecords() {

    }
    /**
     * Get list of all sets
     */
    getListSets() {
        
    }
}
