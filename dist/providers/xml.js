"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml = void 0;
const common_1 = require("@nestjs/common");
const id_i_interface_1 = require("../models/interfaces/id-i.interface");
let Xml = class Xml {
    setIdentify() {
        let idXml = new id_i_interface_1.ID();
        return `<?xml version='1.0' encoding='UTF-8'?><?xml-stylesheet type='text/xsl' href='oai2.xsl' ?>
                    <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>
                    <responseDate>2020-09-30T19:52:58Z</responseDate>
                    <request verb='Identify'>${idXml.baseurl}</request>
                    <Identify>
                        <repositoryName>Dépôt Nemateria</repositoryName>
                        <baseURL>${idXml.baseurl}</baseURL>
                        <protocolVersion>2.0</protocolVersion>
                        <adminEmail>${idXml.adminemail}</adminEmail>
                        <earliestDatestamp>${idXml.earliest}</earliestDatestamp>
                        <deletedRecord>${idXml.deleterecord}</deletedRecord>
                        <granularity>${idXml.granularity}</granularity>
                        <description>
                        <oai-identifier xmlns='http://www.openarchives.org/OAI/2.0/oai-identifier' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/oai-identifier http://www.openarchives.org/OAI/2.0/oai-identifier.xsd'>        
                            <scheme>${idXml.scheme}</scheme>        
                            <repositoryIdentifier>${idXml.repoid}</repositoryIdentifier>        
                            <delimiter>${idXml.delimiter}</delimiter>        
                            <sampleIdentifier>${idXml.sampleid}</sampleIdentifier></oai-identifier></description>
                    </Identify>
                    </OAI-PMH>`;
    }
    setRecord(rec) {
    }
    setRecords(rec) {
    }
};
Xml = __decorate([
    common_1.Injectable()
], Xml);
exports.Xml = Xml;
//# sourceMappingURL=xml.js.map