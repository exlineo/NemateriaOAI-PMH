"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const get_record_controller_1 = require("./get-record/get-record.controller");
const identify_controller_1 = require("./identify/identify.controller");
const list_identifiers_controller_1 = require("./list-identifiers/list-identifiers.controller");
const list_metadata_formats_controller_1 = require("./list-metadata-formats/list-metadata-formats.controller");
const list_records_controller_1 = require("./list-records/list-records.controller");
const list_sets_controller_1 = require("./list-sets/list-sets.controller");
const xml_1 = require("./providers/xml");
const pmh_service_1 = require("./providers/services/pmh/pmh.service");
const db_1 = require("./providers/db");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [app_controller_1.AppController, get_record_controller_1.GetRecordController, identify_controller_1.IdentifyController, list_identifiers_controller_1.ListIdentifiersController, list_metadata_formats_controller_1.ListMetadataFormatsController, list_records_controller_1.ListRecordsController, list_sets_controller_1.ListSetsController],
        providers: [app_service_1.AppService, xml_1.Xml, pmh_service_1.PmhService, ...db_1.dbProvide],
        exports: [...db_1.dbProvide]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map