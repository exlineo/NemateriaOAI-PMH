import { Document } from 'mongoose';

export interface SetModel extends Document {
    readonly _id: any;
    readonly titre: string;
    readonly alias: string;
    readonly description: string;
    readonly type: string;
    readonly createur: string;
    readonly fond:string;
    readonly langue: string;
    readonly notices?:Array<string> | Array<number>;
    readonly series?:Array<string>;
}
// {fond:"Quercy", groupe:["Mémoire de la grande guerre"]}