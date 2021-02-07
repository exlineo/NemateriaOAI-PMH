import { IdentifyXml } from '../providers/xml/identify-xml';
export declare class IdentifyController {
    private readonly idXml;
    constructor(idXml: IdentifyXml);
    infosOAI(): Promise<string>;
}
