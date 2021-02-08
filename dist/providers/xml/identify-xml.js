"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifyXml = void 0;
const common_1 = require("@nestjs/common");
let IdentifyXml = class IdentifyXml {
    idenfityXml(id) {
        let idXml = id;
        return `<Identify>
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
                            <sampleIdentifier>${idXml.sampleid}</sampleIdentifier>
                        </oai-identifier>
                    </description>
                    <description>
                        <eprints 
                            xmlns="http://www.openarchives.org/OAI/1.1/eprints"
                            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                            xsi:schemaLocation="http://www.openarchives.org/OAI/1.1/eprints 
                            http://www.openarchives.org/OAI/1.1/eprints.xsd">
                            <content>
                                <URL>http://www.nemateria.eu</URL>
                                <text>Collections diverses</text>
                            </content>
                            <metadataPolicy/>
                            <dataPolicy/>
                        </eprints>
                        </description>
                        <description>
                        <friends 
                            xmlns="http://www.openarchives.org/OAI/2.0/friends/" 
                            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                            xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/friends/
                            http://www.openarchives.org/OAI/2.0/friends.xsd">
                            <baseURL>http://vps550598.ovh.net/nemateriaoai/</baseURL>
                        </friends>
                    </description>
                </Identify>`;
    }
    xml(baseurl, identify) {
        return `<?xml version='1.0' encoding='UTF-8'?>
        <?xml-stylesheet type='text/xsl' href='http://vps550598.ovh.net/oai/xml/oai2.xsl' ?>
            <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>
            <responseDate>${new Date(Date.now()).toLocaleDateString("fr-FR")}</responseDate>
            <request verb='Identify'>${baseurl}</request>
            ${identify}
        </OAI-PMH>`;
    }
    setIdentifyXml(id) {
        return this.xml(id.baseurl, this.idenfityXml(id));
    }
    setListIdentifyXml(ids) {
        let str = '';
        if (Array.isArray(ids)) {
            ids.forEach(i => str += this.idenfityXml(i));
        }
        return this.xml(ids[0].baseurl, str);
    }
};
IdentifyXml = __decorate([
    common_1.Injectable()
], IdentifyXml);
exports.IdentifyXml = IdentifyXml;
//# sourceMappingURL=identify-xml.js.map