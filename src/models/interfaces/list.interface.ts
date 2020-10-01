export interface ListI {
    from:string;
    until:string;
    metadataPrefix:string;
    set:string;
    resumptionToken:string;
}

export class List implements ListI{
    from = '';
    until = '';
    metadataPrefix = '';
    set = '';
    resumptionToken = '';
}
