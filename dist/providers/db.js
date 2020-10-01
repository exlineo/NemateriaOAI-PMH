"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericProvider = exports.dbProvide = void 0;
const mongoose = require("mongoose");
const config_1 = require("../config");
const pmh_schemas_1 = require("../models/schemas/pmh.schemas");
exports.dbProvide = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect(config_1.SERV_ADR, { useNewUrlParser: true }),
    },
];
exports.genericProvider = [
    {
        provide: 'GENERIC_MODEL',
        useFactory: (connection) => connection.model('Generic', pmh_schemas_1.GenericSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=db.js.map