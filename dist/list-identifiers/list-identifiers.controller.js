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
exports.ListIdentifiersController = void 0;
const common_1 = require("@nestjs/common");
const pmh_service_1 = require("../providers/services/pmh/pmh.service");
const xml_1 = require("../providers/xml");
let ListIdentifiersController = class ListIdentifiersController {
    constructor(pmhServ, xml) {
        this.pmhServ = pmhServ;
        this.xml = xml;
    }
    async listIDs(from, until, metadataPrefix, set, resumptionToken) {
        return await new Object();
    }
    async infosOAI() {
        return this.pmhServ.getListIdentifiers();
    }
    async erreur() {
        return "Merci de vérifier les paramètres transmis dans votre URL";
    }
};
__decorate([
    common_1.Get('/:from/:until/:metadataPrefix/:set/:resumptionToken'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('from')), __param(1, common_1.Param('until')), __param(2, common_1.Param('metadataPrefix')), __param(3, common_1.Param('set')), __param(4, common_1.Param('resumptionToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ListIdentifiersController.prototype, "listIDs", null);
__decorate([
    common_1.Get(),
    common_1.Header('Content-Type', 'text/xml'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListIdentifiersController.prototype, "infosOAI", null);
__decorate([
    common_1.Get('*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListIdentifiersController.prototype, "erreur", null);
ListIdentifiersController = __decorate([
    common_1.Controller('ListIdentifiers'),
    __metadata("design:paramtypes", [pmh_service_1.PmhService, xml_1.SetXml])
], ListIdentifiersController);
exports.ListIdentifiersController = ListIdentifiersController;
//# sourceMappingURL=list-identifiers.controller.js.map