import { SetXml } from '../providers/xml';
export declare class IdentifyController {
    private readonly xml;
    constructor(xml: SetXml);
    infosOAI(): Promise<string>;
}
