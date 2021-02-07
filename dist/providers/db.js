"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtreProvider = exports.setProvider = exports.idProvider = exports.noticeProvider = exports.genericProvider = exports.dbProvide = void 0;
const mongoose = require("mongoose");
const config_1 = require("../config");
const pmh_schemas_1 = require("../models/schemas/pmh.schemas");
exports.dbProvide = [
    {
        provide: 'DB_MODEL',
        useFactory: () => mongoose.connect(config_1.SERV_ADR, { useNewUrlParser: true }),
    },
];
exports.genericProvider = [
    {
        provide: 'GENERIC_MODEL',
        useFactory: (connection) => connection.model('Generic', pmh_schemas_1.GenericSchema),
        inject: ['DB_MODEL'],
    },
];
exports.noticeProvider = [
    {
        provide: 'NOTICE_MODEL',
        useFactory: (connection) => connection.model('Notice', pmh_schemas_1.NoticeSchema),
        inject: ['DB_MODEL'],
    },
];
exports.idProvider = [
    {
        provide: 'IDENTIFY_MODEL',
        useFactory: (connection) => connection.model('Identify', pmh_schemas_1.IdentifySchema),
        inject: ['DB_MODEL'],
    },
];
exports.setProvider = [
    {
        provide: 'SET_MODEL',
        useFactory: (connection) => connection.model('Set', pmh_schemas_1.SetSchema),
        inject: ['DB_MODEL'],
    },
];
exports.filtreProvider = [
    {
        provide: 'FILTRE_MODEL',
        useFactory: (connection) => connection.model('Filtre', pmh_schemas_1.MetaSchema),
        inject: ['DB_MODEL'],
    },
];
//# sourceMappingURL=db.js.map