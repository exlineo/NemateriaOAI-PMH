export interface IdI {
    baseurl:string;
    adminemail:string;
    earliest:number | Date;
    deleterecord:string;
    granularity:string;
    scheme:string;
    repoid:string;
    delimiter:string;
    sampleid:string;
}
export class ID implements IdI {
    baseurl = 'https://vps550589.ovh.net/nemateriaoai';
    adminemail = 'contact@exlineo.com';
    earliest = new Date();
    deleterecord = 'no';
    granularity = 'YYYY-MM-DDThh:mm:ssZ';
    scheme = 'oai_dc';
    repoid = 'oai.nemateria.net';
    delimiter = ':';
    sampleid = 'oai:nemateria.net:000';
}
