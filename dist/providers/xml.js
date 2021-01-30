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
let SetXml = class SetXml {
    setIdentifyXml(ID) {
        let idXml = ID;
        return `<?xml version='1.0' encoding='UTF-8'?>
                <?xml-stylesheet type='text/xsl' href='http://vps550598.ovh.net/oai/xml/oai2.xsl' ?>
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
    getOAI2Xsl() {
        return ``;
    }
    setRecordXml(rec) {
        let xml = `<?xml version="1.0" encoding="utf-8"?>
        <?xml-stylesheet type="text/xsl" href="/oai/xsl"?>
        <OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd">
          <responseDate>2020-10-02T08:14:31Z</responseDate>
          <request verb="ListRecords" metadataPrefix="oai_dc">http://api.archives-ouvertes.fr/oai/hal/</request>
          <ListRecords>
            <record>
                <header>
                    <identifier>oai:HAL:tel-02955615v1</identifier>
                    <datestamp>2020-10-02</datestamp>
                    <setSpec>type:THESE</setSpec>
                    <setSpec>subject:sdv</setSpec>
                    <setSpec>collection:STAR</setSpec>
                </header>
                <metadata xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/" xmlns:dc="http://purl.org/dc/elements/1.1/"><oai_dc:dc xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tei="http://www.tei-c.org/ns/1.0" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/  http://www.openarchives.org/OAI/2.0/oai_dc.xsd http://purl.org/dc/elements/1.1/  http://dublincore.org/schemas/xmls/qdc/2008/02/11/dc.xsd">
                    <dc:publisher>HAL CCSD</dc:publisher>
                    <dc:title xml:lang="en">Analysis of isoforms from the Tyrosine Kinase Receptor HER4 : towards a therapeutic targeting using antibodies in cancerology</dc:title>
                    <dc:title xml:lang="fr">Analyse des isoformes du récepteur tyrosine kinase HER4 : vers un ciblage thérapeutique à l’aide d’anticorps en cancérologie</dc:title>
                    <dc:creator>Lanotte, Romain</dc:creator>
                    <dc:contributor>Institut de Recherche en Cancérologie de Montpellier (IRCM - U1194 Inserm - UM) ; CRLCC Val d'Aurelle - Paul Lamarque-Institut National de la Santé et de la Recherche Médicale (INSERM)-Université de Montpellier (UM)</dc:contributor>
                    <dc:identifier>NNT: 2018MONTT090</dc:identifier>
                    <dc:contributor>Université Montpellier</dc:contributor>
                    <dc:contributor>Thierry Chardès</dc:contributor>
                    <dc:identifier>tel-02955615</dc:identifier>
                    <dc:identifier>https://tel.archives-ouvertes.fr/tel-02955615</dc:identifier>
                    <dc:identifier>https://tel.archives-ouvertes.fr/tel-02955615/document</dc:identifier>
                    <dc:identifier>https://tel.archives-ouvertes.fr/tel-02955615/file/2018_LANOTTE_archivage.pdf</dc:identifier>
                    <dc:source>https://tel.archives-ouvertes.fr/tel-02955615</dc:source>
                    <dc:source>Cancer. Université Montpellier, 2018. Français. &amp;#x27E8;NNT : 2018MONTT090&amp;#x27E9;</dc:source>
                    <dc:language>fr</dc:language>
                    <dc:subject xml:lang="en">ErbB4/HER4</dc:subject>
                    <dc:subject xml:lang="en">Antibody</dc:subject>
                    <dc:subject xml:lang="en">Tumor suppressor</dc:subject>
                    <dc:subject xml:lang="en">Oncogene</dc:subject>
                    <dc:subject xml:lang="fr">ErbB4/HER4</dc:subject>
                    <dc:subject xml:lang="fr">Anticorps</dc:subject>
                    <dc:subject xml:lang="fr">Suppresseur de tumeur</dc:subject>
                    <dc:subject xml:lang="fr">Oncogène</dc:subject>
                    <dc:subject>[SDV.CAN]Life Sciences [q-bio]/Cancer</dc:subject>
                    <dc:type>info:eu-repo/semantics/doctoralThesis</dc:type>
                    <dc:type>Theses</dc:type>
                    <dc:description xml:lang="en">
                                HER family is composed by four members which play a major role in cancer development. EGFR, HER2 and HER3 are well described and targeted with therapeutic monoclonal antibodies. HER4, the last one, is poorly described with a contentious role in cancerogenesis. Nowadays, there is no therapeutic antibody targeting HER4 in clinic. Four isoforms of the receptor are addressed to the plasma membrane and are called JMa/CYT1; JMa/CYT2; JMb/CYT1 and JMb/CYT2. JMa isoforms are activated by cleavage, but not JMb isoforms. Following their activation, JMa isoform cleavage releases the intracellular part of the receptor called 4ICD. This part can be directed to the nucleus or others subcellular compartments, involving HER4 in oncogenic or tumor suppressor signalling. Because a pro-apoptotic activity of 4ICD and its main ligand NRG1 have been described, we studied JMa isoforms signaling to determine their roles in cancer. We demonstrated that NRG1 induce a tumor suppressor signalling from JMa/CYT1 and an oncogenic signalling from JMa/CYT2. Based on these results, we developed an innovative screening for anti-HER4 antibodies by whole cell panning with phage display. To this end, we used NRG1- stimulated cells expressing JMa/CYT1 isoforms. We characterized four anti-HER4 antibodies and functions of some of them are affected and modulated by NRG1. Two antibodies were characterized as agonistic anti-HER4 antibodies and induce cell death of cancer cells by different mechanisms. Like NRG1, one of them induce mitochondrial localization of 4ICD-CYT1 to induce cell death. These promising results pave the way to a therapeutic targeting of HER4 receptor with agonistic antibodies to treat cancer
                                </dc:description>
                    <dc:description xml:lang="fr">
                                Les récepteurs de la famille HER jouent un rôle majeur dans le développement du cancer. Alors qu’EGFR, HER2 et HER3 sont très bien étudiés et ciblés par des anticorps thérapeutiques, le dernier récepteur de cette famille, HER4, n’est que peu étudié et son implication dans la cancérogénèse est controversée. Il n’existe à ce jour pas d’anticorps thérapeutique anti-HER4 sur le marché ou en phase clinique. Ce récepteur est présent à la surface en quatre isoformes (JMa/CYT1 ; JMa/CYT2 ; JMb/CYT1 ; JMb/CYT2). Les isoformes JMa sont activées par clivage du récepteur, contrairement aux deux isoformes JMb. Le clivage de ces isoformes conduit à la libération de la partie intracellulaire du récepteur, appelée 4ICD. Ce fragment peut être dirigée au noyau ou dans d’autres compartiments cellulaires, impliquant HER4 dans des signalisations oncogéniques ou suppresseurs de tumeur. La littérature décrivant une activité pro-apoptotique de 4ICD et de la NRG1, le principal ligand de HER4, nous avons étudié la signalisation de ces isoformes afin de déterminer leurs rôles au niveau tumoral. Nos résultats indiquent que la NRG1 induit une signalisation suppresseur de tumeur via JMa/CYT1 et une signalisation oncogénique via JMa/CYT2. Sur la base de ces résultats, nous avons développé un criblage original d’anticorps anti-HER4 par phage display, sur des cellules exprimant l’isoforme JMa/CYT1 et stimulées par la NRG1. Nous avons caractérisés quatre anticorps anti-HER4, dont l’activité et les signalisations de certains sont modulées par la NRG1. Deux de ces anticorps, caractérisés comme étant des agonistes du récepteur HER4, induisent la mort des cellules tumorales par des mécanismes que nous sommes en train d’élucider. De manière similaire a la NRG1, un des anticorps induit la relocalisation de 4ICD-CYT1 a la mitochondrie pour induire la mort cellulaire. Ces résultats prometteurs ouvrent la voie à un ciblage thérapeutique du récepteur HER4 a l’aide d’anticorps agonistes pour le traitement des cancers
                                </dc:description>
                    <dc:date>2018-11-29</dc:date>
                    <dc:rights>info:eu-repo/semantics/OpenAccess</dc:rights>
                    </oai_dc:dc>
                </metadata>
            </record>
            <resumptionToken expirationDate="2020-10-02T10:14:31Z" completeListSize="2454558" cursor="0">AoFdi6ML</resumptionToken>
          </ListRecords>
        </OAI-PMH>`;
    }
    setRecordsXml(rec) {
    }
    setUpRecord() {
        let xml;
        return xml;
    }
};
SetXml = __decorate([
    common_1.Injectable()
], SetXml);
exports.SetXml = SetXml;
//# sourceMappingURL=xml.js.map