import { Injectable } from '@nestjs/common';
import { threadId } from 'worker_threads';

@Injectable()
export class FiltreXml {

    pref:Array<{prefix:Array<string>}>;

    constructor(){
    }
    setPrefix(pr:any){
        this.pref = pr;
        console.log("Préfix", this.prefix());
        // Traiter les prefix
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
            </OAI-PMH>`
    }
    /**
     * Traiter le tableau de prefix trouvés dans la base pour les injecter dans le XML
     */
    prefix(){
        // Réduire le tableau à une chaîne
        let tmp:string='';
        let ar:Array<any>=[];
        this.pref.forEach(
            m => {
                ar = [...new Set(ar.concat(m.prefix))];
            }
        );
        console.log(ar);
        // Applatir le tableau
        ar.forEach(
            a => tmp += `<metadataFormat>
                            <metadataPrefix>${a}</metadataPrefix>
                            <schema></schema>
                            <metadataNamespace></metadataNamespace>
                            </metadataFormat>`
        );
        return tmp; 
    }
}
