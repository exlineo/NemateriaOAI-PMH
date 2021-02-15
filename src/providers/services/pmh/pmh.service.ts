import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { GenericI, NoticeI } from '../../../models/interfaces/generic.interface';
import { IdentifyXml } from '../../xml/identify-xml';
import { RecordXml } from '../../xml/record-xml';
import { SetXml } from '../../xml/set-xml';
import { FiltreXml } from '../../xml/filtre-xml';
import { ID } from '../../../models/interfaces/id-i.interface';
import { stringify } from 'querystring';

@Injectable()
export class PmhService {
    constructor(
        @Inject('GENERIC_MODEL') private readonly genModel: Model<GenericI>,
        @Inject('NOTICE_MODEL') private readonly noticeModel: Model<NoticeI>,
        @Inject('IDENTIFY_MODEL') private readonly idModel: Model<GenericI>,
        @Inject('SET_MODEL') private readonly setModel: Model<GenericI>,
        @Inject('FILTRE_MODEL') private readonly filtreModel: Model<GenericI>,
        private readonly idXml: IdentifyXml,
        private readonly recXml: RecordXml,
        private readonly setXml: SetXml,
        private readonly filtreXml: FiltreXml) { }

    /**
     * Renvoyer l'Identify du serveur
     * @param id Identifiant de l'Idenfitfy du serveur à renvoyer (obsolète)
     */
    async getIdentify() {
        let data:any = await this.idModel.find().lean().limit(1);
        // console.log(data, this.idModel);
        return this.idXml.setIdentifyXml(data[0]);
    }
    /**
     * Renvoyer l'Identify du serveur
     * @param id Identifiant de l'Idenfitfy du serveur à renvoyer (obsolète)
     */
    async getIdIdentify(id) {
        let data:any = await this.idModel.findById(id).lean().exec();
        return this.idXml.setIdentifyXml(data);
    }
    /**
     * Renvoyer la liste des Identify du serveur
     */
    async getListIdentifiers() {
        const xml = await this.genModel.find().lean().exec();
        return this.idXml.setListIdentifyXml(xml);
    }
    /**
     * Récupérer la liste des préfix et les renvoyer en XML
     */ 
    async getistMedataFormats() {
        // Récupérer la liste des filtres dans la base
        const pref = await this.filtreModel.find().select('prefix -_id').lean().exec();
        // Renvoyer le résultat formaté en XML
        return this.filtreXml.setPrefix(pref);
    }
    /**
     * Récupérer un SET en particulier
     */
    async getSet(id: any) {
        let set = await this.setModel.findById(id).exec();
        return this.setXml.setSetXml(set);
    }
    /**
     * Obtenir la liste des SETS
     */
    async getSets() {
        let sets = await this.setModel.find().lean().exec();
        return this.setXml.setListSetsXml(sets);
    }
    /**
     * Récupérer la liste des NOTICES du serveur
     */
    async getRecords() {
        let recs = await this.noticeModel.find().lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
    /**
     * Récupérer une NOTICE avec son ID
     * @param id Ientifiant unique du Dublin Core
     */
    async getRecord(id: any) {
        let rec = await this.noticeModel.findById(id).lean().exec();
        return this.recXml.recordXml(rec);
    }
    /**
     * Récupérer une NOTICE avec son ID
     * @param id Ientifiant unique du Dublin Core
     */
    async getRecordsMeta(p: string) {
        let rec = await this.noticeModel.find({prefix:p}).lean().exec();
        return this.recXml.listRecordsXml(rec);
    }
    /**
     * Récupérer les documents d'un SET
     * @param set Nom du SET dans lequel nous recherchons
     */
    async getRecordsSet(set:string){
        // let recs = await this.noticeModel.find({metadonnees:{nemateria:{collection:{nom_collection:set}}}}).select('documents').lean().exec();
        let recs = await this.noticeModel.find({'metadonnees.nemateria.collection.nom_collection':set}).lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
    /**
     * Récupérer une NOTICE avec son ID
     * @param id Ientifiant unique du Dublin Core
     */
    async getRecordsFrom(f: string) {
        let recs = await this.noticeModel.find({'metadonnees.dublincore.date':{$gte:this.setTimeStamp(f)}}).lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
    /**
     * Récupérer une NOTICE avec son ID
     * @param id Ientifiant unique du Dublin Core
     */
    async getRecordsFromUntil(f: string, u:string) {
        let recs = await this.noticeModel.find({'metadonnees.dublincore.date':{$gte:this.setTimeStamp(f), $lt:this.setTimeStamp(u)}}).lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
    /**
     * Récupérer une NOTICE avec son ID
     * @param id Ientifiant unique du Dublin Core
     */
    async getRecordsFUM(f: string, u:string, m:string) {
        let recs = await this.noticeModel.find({'metadonnees.dublincore.date':{$gte:this.setTimeStamp(f), $lt:this.setTimeStamp(u)}, prefix:m}).lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
    /**
     * Récupérer une NOTICE avec son ID
     * @param id Ientifiant unique du Dublin Core
     */
    async getRecordsAll(f: string, u:string, m:string, s:string) {
        let recs = await this.noticeModel.find({'metadonnees.dublincore.date':{$gte:this.setTimeStamp(f), $lt:this.setTimeStamp(u)}, prefix:m, 'metadonnees.nemateria.collection.nom_collection':s}).lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
    /**
     * Transformer une date en timestamp
     * @param d Date à traiter vers le Timestamp
     */
    setTimeStamp(d:string){
        if(isNaN(parseInt(d))){
            if(d.indexOf('-') > -1) d = d.replace('-', '/');
            return Date.parse(d);
        };
        return parseInt(d);
    }
}
