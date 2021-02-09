"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetXml = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
let SetXml = class SetXml {
    setXml(i) {
        return `<set>
                    <setName>${i.titre}</setName>
                    <setSpec>fonds:${i.fonds}</setSpec>
                    <setDescription>
                        <oai_dc:dc 
                            xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/" 
                            xmlns:dc="http://purl.org/dc/elements/1.1/" 
                            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                            xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/ 
                            http://www.openarchives.org/OAI/2.0/oai_dc.xsd">
                            <dc:description>${i.description}</dc:description>
                        </oai_dc:dc>
                    </setDescription>
                </set>`;
    }
    xml(sets) {
        return `<?xml version='1.0' encoding='UTF-8'?>
        <?xml-stylesheet type='text/xsl' href='http://vps550598.ovh.net/oai/xml/oai2.xsl' ?>
            <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>
            <responseDate>${new Date(Date.now()).toLocaleDateString("fr-FR")}</responseDate>
            <request verb='ListSets'>${config_1.ROOT}</request>
            <ListSets>
                ${sets}
            </ListSets>
        </OAI-PMH>`;
    }
    setSetXml(rec) {
        return rec;
    }
    setListSetsXml(recs) {
        let str = '';
        if (Array.isArray(recs)) {
            recs.forEach(i => str += this.setXml(i));
        }
        return this.xml(str);
    }
};
SetXml = __decorate([
    common_1.Injectable()
], SetXml);
exports.SetXml = SetXml;
//# sourceMappingURL=set-xml.js.map