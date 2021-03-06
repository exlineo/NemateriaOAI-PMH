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
exports.ListSetsController = void 0;
const common_1 = require("@nestjs/common");
const pmh_service_1 = require("../providers/services/pmh/pmh.service");
let ListSetsController = class ListSetsController {
    constructor(pmhServ) {
        this.pmhServ = pmhServ;
    }
    async listFormat(resumptionToken) {
        return new Object();
    }
    async sets() {
        return this.pmhServ.getSets();
    }
};
__decorate([
    common_1.Get('/:resumptionToken'),
    common_1.Header('Content-Type', 'text/xml'),
    __param(0, common_1.Param('resumptionToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListSetsController.prototype, "listFormat", null);
__decorate([
    common_1.Get(),
    common_1.Header('Content-Type', 'text/xml'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListSetsController.prototype, "sets", null);
ListSetsController = __decorate([
    common_1.Controller('ListSets'),
    __metadata("design:paramtypes", [pmh_service_1.PmhService])
], ListSetsController);
exports.ListSetsController = ListSetsController;
//# sourceMappingURL=list-sets.controller.js.map