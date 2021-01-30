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
exports.GetRecordController = void 0;
const common_1 = require("@nestjs/common");
let GetRecordController = class GetRecordController {
    async findRecord(identifier, metadataPrefix) {
        return new Object();
    }
    async findRecordPrefix(identifier, metadataPrefix) {
        return new Object();
    }
    async erreur() {
        return "Merci de vérifier les paramètres transmis dans votre URL";
    }
};
__decorate([
    common_1.Get('/:identifier'),
    __param(0, common_1.Param('identifier')), __param(1, common_1.Param('metadataPrefix')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GetRecordController.prototype, "findRecord", null);
__decorate([
    common_1.Get('/:identifier/:metadataPrefix'),
    __param(0, common_1.Param('identifier')), __param(1, common_1.Param('metadataPrefix')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GetRecordController.prototype, "findRecordPrefix", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GetRecordController.prototype, "erreur", null);
GetRecordController = __decorate([
    common_1.Controller('/GetRecord')
], GetRecordController);
exports.GetRecordController = GetRecordController;
//# sourceMappingURL=get-record.controller.js.map