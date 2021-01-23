export interface IdI {
    baseurl: string;
    adminemail: string;
    earliest: number | Date;
    deleterecord: string;
    granularity: string;
    scheme: string;
    repoid: string;
    delimiter: string;
    sampleid: string;
}
export declare class ID implements IdI {
    baseurl: string;
    adminemail: string;
    earliest: Date;
    deleterecord: string;
    granularity: string;
    scheme: string;
    repoid: string;
    delimiter: string;
    sampleid: string;
}
