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
const id_i_interface_1 = require("../models/interfaces/id-i.interface");
const xml_1 = require("../providers/xml");
let IdentifyController = class IdentifyController {
    constructor(xml) {
        this.xml = xml;
    }
    async infosOAI() {
        return this.xml.setIdentifyXml(new id_i_interface_1.ID());
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
    __metadata("design:paramtypes", [xml_1.SetXml])
], IdentifyController);
exports.IdentifyController = IdentifyController;
//# sourceMappingURL=identify.controller.js.map