"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmhService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const identify_xml_1 = require("../../xml/identify-xml");
const record_xml_1 = require("../../xml/record-xml");
const set_xml_1 = require("../../xml/set-xml");
const filtre_xml_1 = require("../../xml/filtre-xml");
let PmhService = class PmhService {
    constructor(genModel, noticeModel, idModel, setModel, filtreModel, idXml, recXml, setXml, filtreXml) {
        this.genModel = genModel;
        this.noticeModel = noticeModel;
        this.idModel = idModel;
        this.setModel = setModel;
        this.filtreModel = filtreModel;
        this.idXml = idXml;
        this.recXml = recXml;
        this.setXml = setXml;
        this.filtreXml = filtreXml;
    }
    async getIdentify() {
        let data = await this.idModel.find().lean().limit(1);
        return this.idXml.setIdentifyXml(data[0]);
    }
    async getIdIdentify(id) {
        let data = await this.idModel.findById(id).lean().exec();
        return this.idXml.setIdentifyXml(data);
    }
    async getListIdentifiers() {
        const xml = await this.genModel.find().lean().exec();
        return this.idXml.setListIdentifyXml(xml);
    }
    async getistMedataFormats() {
        const pref = await this.filtreModel.find().select('prefix -_id').lean().exec();
        return this.filtreXml.setPrefix(pref);
    }
    async getSet(id) {
        let set = await this.setModel.findById(id).exec();
        return this.setXml.setSetXml(set);
    }
    async getSets() {
        let sets = await this.setModel.find().lean().exec();
        return this.setXml.setListSetsXml(sets);
    }
    async getRecords() {
        let recs = await this.noticeModel.find().lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
    async getRecord(id) {
        let rec = await this.noticeModel.findById(id).lean().exec();
        return this.recXml.recordXml(rec);
    }
    async getRecordsMeta(p) {
        let rec = await this.noticeModel.find({ prefix: p }).lean().exec();
        return this.recXml.listRecordsXml(rec);
    }
    async getRecordsSet(set) {
        let recs = await this.noticeModel.find({ 'metadonnees.nemateria.collection.nom_collection': set }).lean().exec();
        return this.recXml.listRecordsXml(recs);
    }
};
PmhService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('GENERIC_MODEL')),
    __param(1, common_1.Inject('NOTICE_MODEL')),
    __param(2, common_1.Inject('IDENTIFY_MODEL')),
    __param(3, common_1.Inject('SET_MODEL')),
    __param(4, common_1.Inject('FILTRE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        identify_xml_1.IdentifyXml,
        record_xml_1.RecordXml,
        set_xml_1.SetXml,
        filtre_xml_1.FiltreXml])
], PmhService);
exports.PmhService = PmhService;
//# sourceMappingURL=pmh.service.js.map