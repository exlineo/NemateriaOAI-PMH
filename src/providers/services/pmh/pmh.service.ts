import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { GenericI } from '../../../models/interfaces/generic.interface';

@Injectable()
export class PmhService {
    constructor(
        @Inject('GENERIC_MODEL')
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
