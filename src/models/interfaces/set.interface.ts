import { Document } from 'mongoose';

export interface SetModel extends Document {
    readonly _id: any;
    readonly titre: string;
    readonly alias: string;
    readonly date: Date | string | number;
    readonly description?: string;
    readonly createur?: string;
    readonly gestionnaire?:string;
    readonly fonds?:string;
    readonly documents?:Array<any>;
    readonly prefix?:Array<string>;
}
// {fond:"Quercy", groupe:["Mémoire de la grande guerre"]}