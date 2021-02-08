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
exports.IdentifyController = void 0;
const common_1 = require("@nestjs/common");
const pmh_service_1 = require("../providers/services/pmh/pmh.service");
let IdentifyController = class IdentifyController {
    constructor(pmhServ) {
        this.pmhServ = pmhServ;
    }
    async infosOAI() {
        return this.pmhServ.getIdentify();
    }
    async infosIdOAI(id) {
        return this.pmhServ.getIdIdentify(id);
    }
};
__decorate([
    common_1.Get(),
    common_1.Header('Content-Type', 'text/xml'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IdentifyController.prototype, "infosOAI", null);
__decorate([
    common_1.Get(':id'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IdentifyController.prototype, "infosIdOAI", null);
IdentifyController = __decorate([
    common_1.Controller('Identify'),
    __metadata("design:paramtypes", [pmh_service_1.PmhService])
], IdentifyController);
exports.IdentifyController = IdentifyController;
//# sourceMappingURL=identify.controller.js.map