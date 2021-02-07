import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { GenericI } from '../../../models/interfaces/generic.interface';
import { IdentifyXml } from '../../xml/identify-xml';
import { RecordXml } from '../../xml/record-xml';
import { SetXml } from '../../xml/set-xml';
import { FiltreXml } from '../../xml/filtre-xml';

@Injectable()
export class PmhService {
    constructor(
        @Inject('GENERIC_MODEL') private readonly genModel:Model<GenericI>,
        @Inject('NOTICE_MODEL') private readonly noticeModel:Model<GenericI>,
        @Inject('IDENTIFY_MODEL') private readonly idModel:Model<GenericI>,
        @Inject('SET_MODEL') private readonly setModel:Model<GenericI>,
        @Inject('FILTRE_MODEL') private readonly filtreModel:Model<GenericI>,
        private readonly idXml:IdentifyXml,
        private readonly recXml:RecordXml,
        private readonly setXml:SetXml,
        private readonly filtreXml:FiltreXml) {}
    
    /**
     * Renvoyer l'Identify du serveur
     * @param id Identifiant de l'Idenfitfy du serveur à renvoyer (obsolète)
     */
    async getIdentify(id) {
        return await this.genModel.findById(id).exec();
    }
    /**
     * Renvoyer la liste des Identify du serveur
     */
    async getListIdentifiers() {
        return await this.genModel.find().exec();
    }
    // Récupérer la liste des préfix et les renvoyer en XML
    async getistMedataFormats() {
        // Récupérer la liste des filtres dans la base
         const pref = await this.filtreModel.find().select('prefix -_id').lean().exec();
         // Renvoyer le résultat formaté en XML
         return this.filtreXml.setPrefix(pref);
    }
    /**
     * Récupérer un SET en particulier
     */
    async geSet(id:any) {
        let set = await this.setModel.findById(id).exec();
        return this.setXml.setSetXml(set);
    }
    /**
     * Obtenir la liste des SETS
     */
    async geSets() {
        let sets = await this.setModel.find().exec();
        return this.setXml.setSetsXml(sets);
    }
    /**
     * Récupérer la liste des NOTICES du serveur
     */
    async getRecords() {
        let recs = await this.noticeModel.find().exec();
        return this.recXml.setRecordsXml(recs);
    }
    /**
     * Récupérer une NOTICE avec son ID
     * @param id Ientifiant unique du Dublin Core
     */
    async getRecord(id:any){
        let rec = await this.genModel.findById(id).exec();
        return this.recXml.setRecordXml(rec);
    }
}
