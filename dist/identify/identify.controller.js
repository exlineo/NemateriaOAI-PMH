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
const identify_xml = new XMLDocument();
let IdentifyController = class IdentifyController {
    async infosOAI() {
        return 'Identifiant serveur OAI';
    }
    setXML() {
        const xml = `<?xml version='1.0' encoding='UTF-8'?><?xml-stylesheet type='text/xsl' href='oai2.xsl' ?>
        <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>
          <responseDate>2020-09-30T19:52:58Z</responseDate>
          <request verb='Identify'>https://vps550589.ovh.net/nemateria-oai</request>
          <Identify>
            <repositoryName>Dépôt Nemateria</repositoryName>
            <baseURL>https://vps550589.ovh.net/nemateria-oai</baseURL>
            <protocolVersion>2.0</protocolVersion>
            <adminEmail>contact@exlineo.com</adminEmail>
            <earliestDatestamp>2020-09-30T22:24:00Z</earliestDatestamp>
            <deletedRecord>no</deletedRecord>
            <granularity>YYYY-MM-DDThh:mm:ssZ</granularity>
            <description>
              <oai-identifier xmlns='http://www.openarchives.org/OAI/2.0/oai-identifier' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/oai-identifier http://www.openarchives.org/OAI/2.0/oai-identifier.xsd'>        
                <scheme>oai</scheme>        
                <repositoryIdentifier>exlineo.nemateria.net</repositoryIdentifier>        
                <delimiter>:</delimiter>        
                <sampleIdentifier>oai:exlineo.nemateria.net:153</sampleIdentifier></oai-identifier></description>
          </Identify>
        </OAI-PMH>`;
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
    common_1.Controller('Identify')
], IdentifyController);
exports.IdentifyController = IdentifyController;
//# sourceMappingURL=identify.controller.js.map