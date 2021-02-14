export declare class RecordXml {
    setRecordXml(rec: any): string;
    xml(str: string): string;
    listRecordsXml(rec: Array<any>): Promise<string>;
    listRecordsSetXml(rec: Array<any>): Promise<string>;
    recordXml(rec: any): Promise<string>;
}
