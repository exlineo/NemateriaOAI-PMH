import { Injectable } from '@nestjs/common';
import { ID } from '../models/interfaces/id-i.interface';

@Injectable()
export class Xml {

    setIdentify():string{
        let idXml = new ID();
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

    setRecord(rec:any){
        

    }
    setRecords(rec:Array<any>){

    }
}
