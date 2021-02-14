import { Injectable } from '@nestjs/common';

@Injectable()
export class RecordXml {
    /**
     * Générer un XML à partir d'éléments fournis
     * @param rec Les éléments à intégrer au XML
     */
    setRecordXml(rec: any): string {
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

        if (rec.creator) x += `<dc:creator>${rec.creator.toString()}</dc:creator>`;
        if (rec.subject) x += `<dc:subject xml:lang="fr">${rec.subject.toString()}</dc:subject>`;
        return x;
    }
    /**
     * Retourner un XML formaté
     * @param str XML à insérer
     */
    xml(str: string) {
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
    /**
     * Renvoyer la liste des Records
     * @param rec Tableau des NOTICES à traiter
     */
    async listRecordsXml(rec: Array<any>) {
        let str = '';
        rec.forEach(r => {
            {
                if (r) str += this.setRecordXml(r);
            };
        });
        console.log(str, rec);
        return this.xml(str);
    }
    /**
     * 
     * @param rec 
     */
    async listRecordsSetXml(rec: Array<any>) {
        let str = '';
        if (Array.isArray(rec)) {
            rec.forEach(r => {
                {
                    if (r) str += this.setRecordXml(r);
                };
            });
        }
        console.log(str, rec);
        return this.xml(str);
    }
    /**
     * Renvoyer un fichier XML formaté
     * @param rec Document Dublin Core à renvoyer en XML
     */
    async recordXml(rec: any) {
        return await this.xml(this.setRecordXml(rec));
    }
}
