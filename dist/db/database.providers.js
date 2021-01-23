"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const config_1 = require("../config");
exports.databaseProviders = [
    {
        provide: 'DB_PROVIDER',
        useFactory: async () => {
            mongoose.Promise = global.Promise;
            return await mongoose.connect(config_1.SERV_ADR, { useNewUrlParser: true });
        },
    },
];
//# sourceMappingURL=database.providers.js.map