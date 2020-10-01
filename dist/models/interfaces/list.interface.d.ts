export interface ListI {
    from: string;
    until: string;
    metadataPrefix: string;
    set: string;
    resumptionToken: string;
}
export declare class List implements ListI {
    from: string;
    until: string;
    metadataPrefix: string;
    set: string;
    resumptionToken: string;
}
