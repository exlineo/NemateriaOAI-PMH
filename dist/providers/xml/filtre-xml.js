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
exports.FiltreXml = void 0;
const common_1 = require("@nestjs/common");
let FiltreXml = class FiltreXml {
    constructor() {
    }
    setPrefix(pr) {
        this.pref = pr;
        console.log("Préfix", this.prefix());
        return `<?xml version="1.0" encoding="utf-8"?>
        <?xml-stylesheet type="text/xsl" href="http://vps550598.ovh.net/oai/xml/oai2.xsl"?>
            <OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/
                    http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd">
                <responseDate>${new Date(Date.now()).toLocaleDateString("fr-FR")}</responseDate>
                <request verb="ListMetadataFormats">http://vps550598.ovh.net/nemateriaoai/ListMeradataFormats</request>
                <ListMetadataFormats>
                    ${this.prefix()}
                </ListMetadataFormats>
            </OAI-PMH>`;
    }
    prefix() {
        let tmp = '';
        let ar = [];
        this.pref.forEach(m => {
            ar = [...new Set(ar.concat(m.prefix))];
        });
        console.log(ar);
        ar.forEach(a => tmp += `<metadataFormat>
                            <metadataPrefix>${a}</metadataPrefix>
                            <schema></schema>
                            <metadataNamespace></metadataNamespace>
                            </metadataFormat>`);
        return tmp;
    }
};
FiltreXml = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], FiltreXml);
exports.FiltreXml = FiltreXml;
//# sourceMappingURL=filtre-xml.js.map