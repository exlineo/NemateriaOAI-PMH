import { ID } from '../../models/interfaces/id-i.interface';
export declare class IdentifyXml {
    idenfityXml(id: ID): string;
    xml(baseurl: string, identify: string): string;
    setIdentifyXml(id: ID): string;
    setListIdentifyXml(ids: Array<any>): string;
}
