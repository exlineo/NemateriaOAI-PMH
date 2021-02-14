"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordXml = void 0;
const common_1 = require("@nestjs/common");
let RecordXml = class RecordXml {
    setRecordXml(rec) {
        console.log(rec);
        const db = rec.metadonnees ? rec.metadonnees.dublincore : rec.documents.dublincore;
        const nema = rec.metadonnees ? rec.metadonnees.nemateria : rec.documents.nemateria;
        let x = `
            <record>
                <header>
                    <identifier>${db.identifier ? db.identifier : ''}</identifier>
                    <datestamp>${db.date ? db.date : ''}</datestamp>
                </header>
                <metadata xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/" xmlns:dc="http://purl.org/dc/elements/1.1/"><oai_dc:dc xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tei="http://www.tei-c.org/ns/1.0" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/  http://www.openarchives.org/OAI/2.0/oai_dc.xsd http://purl.org/dc/elements/1.1/  http://dublincore.org/schemas/xmls/qdc/2008/02/11/dc.xsd">
                    
                        <dc:title xml:lang="fr">${db.title ? db.title : ''}</dc:title>
                        <dc:description xml:lang="en">
                            </dc:description>
                        <dc:description xml:lang="fr">
                            ${db.description ? db.description : ''}
                            </dc:description>    
                        <dc:publisher>${db.publisher ? db.publisher : ''}</dc:publisher>
                        <dc:contributor>${db.contributor ? db.contributor : ''}</dc:contributor>
                        <dc:date>${db.date ? db.date : ''}</dc:date>
                        <dc:type>${db.type ? db.type : ''}</dc:type>
                        <dc:format>${db.format ? db.format : ''}</dc:format>
                        <dc:identifier>${db.identifier ? db.identifier : ''}</dc:identifier>
                        <dc:source>${nema.document.url ? nema.document.url : ''}</dc:source>
                        <dc:source>${nema.document.sourceFile ? nema.document.sourceFile : ''}</dc:source>
                        <dc:language>${db.language ? db.language : ''}</dc:language>
                        <dc:relation>${db.relation ? db.relation : ''}</dc:relation>
                        <dc:coverage>${db.coverage ? db.coverage : ''}</dc:coverage>
                        <dc:rights>${db.rights ? db.rights : ''}</dc:rights>
                    </oai_dc:dc>
                </metadata>
            </record>`;
        if (rec.creator)
            x += `<dc:creator>${rec.creator.toString()}</dc:creator>`;
        if (rec.subject)
            x += `<dc:subject xml:lang="fr">${rec.subject.toString()}</dc:subject>`;
        return x;
    }
    xml(str) {
        return `<?xml version="1.0" encoding="utf-8"?>
        <?xml-stylesheet type="text/xsl" href="http://vps550598.ovh.net/oai/xml/nemateria.xsl"?>
        <OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd">
          <responseDate>${new Date(Date.now()).toLocaleDateString("fr-FR")}</responseDate>
          <request verb="ListRecords" metadataPrefix="oai_dc">http://api.archives-ouvertes.fr/oai/hal/</request>
          <ListRecords>
            ${str}
            <resumptionToken expirationDate="2020-10-02T10:14:31Z" completeListSize="2454558" cursor="0">AoFdi6ML</resumptionToken>
          </ListRecords>
        </OAI-PMH>`;
    }
    async listRecordsXml(rec) {
        let str = '';
        rec.forEach(r => {
            {
                if (r)
                    str += this.setRecordXml(r);
            }
            ;
        });
        console.log(str, rec);
        return this.xml(str);
    }
    async listRecordsSetXml(rec) {
        let str = '';
        if (Array.isArray(rec)) {
            rec.forEach(r => {
                {
                    if (r)
                        str += this.setRecordXml(r);
                }
                ;
            });
        }
        console.log(str, rec);
        return this.xml(str);
    }
    async recordXml(rec) {
        return await this.xml(this.setRecordXml(rec));
    }
};
RecordXml = __decorate([
    common_1.Injectable()
], RecordXml);
exports.RecordXml = RecordXml;
//# sourceMappingURL=record-xml.js.map