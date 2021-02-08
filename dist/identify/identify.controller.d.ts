import { PmhService } from 'src/providers/services/pmh/pmh.service';
export declare class IdentifyController {
    private readonly pmhServ;
    constructor(pmhServ: PmhService);
    infosOAI(): Promise<string>;
    infosIdOAI(id: any): Promise<string>;
}
