export interface IdI {
    baseurl:string;
    adminemail:string;
    earliest:string;
    deleterecord:string;
    granularity:string;
    scheme:string;
    repoid:string;
    delimiter:string;
    sampleid:string;
}

export class ID implements IdI {
    baseurl = 'https://vps550589.ovh.net/nemateria-oai';
    adminemail = 'contact@exlineo.com';
    earliest = '2020-09-30T22:24:00Z';
    deleterecord = 'no';
    granularity = 'YYYY-MM-DDThh:mm:ssZ';
    scheme = 'oai';
    repoid = 'exlineo.nemateria.net';
    delimiter = ':';
    sampleid = 'oai:exlineo.nemateria.net:000';
}
