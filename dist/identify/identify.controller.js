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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifyController = void 0;
const common_1 = require("@nestjs/common");
const identify_xml_1 = require("../providers/xml/identify-xml");
let IdentifyController = class IdentifyController {
    constructor(idXml) {
        this.idXml = idXml;
    }
    async infosOAI() {
        console.log(this.idXml.setIdentifyXml());
        return this.idXml.setIdentifyXml();
    }
};
__decorate([
    common_1.Get(),
    common_1.Header('Content-Type', 'text/xml'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IdentifyController.prototype, "infosOAI", null);
IdentifyController = __decorate([
    common_1.Controller('Identify'),
    __metadata("design:paramtypes", [identify_xml_1.IdentifyXml])
], IdentifyController);
exports.IdentifyController = IdentifyController;
//# sourceMappingURL=identify.controller.js.map