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
exports.ListRecordsController = void 0;
const common_1 = require("@nestjs/common");
const pmh_service_1 = require("../providers/services/pmh/pmh.service");
let ListRecordsController = class ListRecordsController {
    constructor(pmhServ) {
        this.pmhServ = pmhServ;
    }
    async listeNotices() {
        return this.pmhServ.getRecords();
    }
    ;
    async parSet(set) {
        return this.pmhServ.getRecordsSet(set);
    }
    async parMeta(prefix) {
        return await this.pmhServ.getRecordsMeta(prefix);
    }
    async parFrom(from) {
        return new Object();
    }
    ;
    async parFromUntil(from, until) {
        return new Object();
    }
    async parFromUntilMeta(from, until, metadataPrefix) {
        return new Object();
    }
    async parPresqueTout(from, until, metadataPrefix, set) {
        return new Object();
    }
    async parTout(from, until, metadataPrefix, set, resumptionToken) {
        return new Object();
    }
};
__decorate([
    common_1.Get(),
    common_1.Header('Content-Type', 'text/xml'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "listeNotices", null);
__decorate([
    common_1.Get('/set/:set'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('set')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "parSet", null);
__decorate([
    common_1.Get('/metadataPrefix/:prefix'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('prefix')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "parMeta", null);
__decorate([
    common_1.Get('/from/:from'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('from')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "parFrom", null);
__decorate([
    common_1.Get('/from/:from/until/:until'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('from')), __param(1, common_1.Param('until')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "parFromUntil", null);
__decorate([
    common_1.Get('/from/:from/until/:until/metadataPrefix/:metadataPrefix'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('from')), __param(1, common_1.Param('until')), __param(2, common_1.Param('metadataPrefix')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "parFromUntilMeta", null);
__decorate([
    common_1.Get('/from/:from/until/:until/metadataPrefix/:metadataPrefix/set/:set'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('from')), __param(1, common_1.Param('until')), __param(2, common_1.Param('metadataPrefix')), __param(3, common_1.Param('set')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "parPresqueTout", null);
__decorate([
    common_1.Get('/from/:from/until/:until/metadataPrefix/:metadataPrefix/set/:set/resumptionToken/:resumptionToken'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('from')), __param(1, common_1.Param('until')), __param(2, common_1.Param('metadataPrefix')), __param(3, common_1.Param('set')), __param(4, common_1.Param('resumptionToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ListRecordsController.prototype, "parTout", null);
ListRecordsController = __decorate([
    common_1.Controller('ListRecords'),
    __metadata("design:paramtypes", [pmh_service_1.PmhService])
], ListRecordsController);
exports.ListRecordsController = ListRecordsController;
//# sourceMappingURL=list-records.controller.js.map