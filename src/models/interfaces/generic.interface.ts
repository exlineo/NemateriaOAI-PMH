
import { Document } from 'mongoose';

export interface GenericI extends Document {
    readonly any?:string;
}