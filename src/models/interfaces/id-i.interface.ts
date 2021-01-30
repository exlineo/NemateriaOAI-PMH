export interface IdI {
    baseurl:string;
    adminemail:string;
    earliest:string | Date;
    deleterecord:string;
    granularity:string;
    scheme:string;
    repoid:string;
    delimiter:string;
    sampleid:string;
}
export class ID implements IdI {
    baseurl = "https://vps550589.ovh.net/nemateriaoai";
    adminemail = "contact@exlineo.com";
    earliest = "2021-01-01T12:00:00Z";
    deleterecord = "no";
    granularity = "YYYY-MM-DDThh:mm:ssZ";
    scheme = "oai";
    repoid = "oai:nemateria.eu";
    delimiter = ":";
    sampleid = "oai:nemateria.eu:000";
}
