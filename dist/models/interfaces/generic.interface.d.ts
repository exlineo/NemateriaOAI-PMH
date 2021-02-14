import { Document } from 'mongoose';
export interface GenericI extends Document {
    readonly any?: any;
}
export interface NoticeI extends Document {
    readonly _id: any;
    readonly date: any;
    readonly metadonnees: any;
}
export interface MetaI extends Document {
    readonly any?: any;
}
export interface IdentifyI extends Document {
    readonly any?: any;
}
export interface SetI extends Document {
    readonly any?: any;
}
