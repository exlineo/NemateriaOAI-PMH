import { Injectable } from '@nestjs/common';
import { SetModel } from '../../models/interfaces/set.interface';
import { ROOT } from '../../config';

@Injectable()
export class SetXml {

    setXml(i:SetModel){
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
    /**
     * Composer le XML complet
     * */ 
    xml(sets: string): string{
        return `<?xml version='1.0' encoding='UTF-8'?>
        <?xml-stylesheet type='text/xsl' href='http://vps550598.ovh.net/oai/xml/oai2.xsl' ?>
            <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>
            <responseDate>${new Date(Date.now()).toLocaleDateString("fr-FR")}</responseDate>
            <request verb='ListSets'>${ROOT}</request>
            <ListSets>
                ${sets}
            </ListSets>
        </OAI-PMH>`;
    }
    setSetXml(rec:any){
        return rec;
    }
    setListSetsXml(recs:Array<any>){
        let str = '';
        if (Array.isArray(recs)) {
            recs.forEach(i => str += this.setXml(i));
        }
        return this.xml(str);
    }
}
