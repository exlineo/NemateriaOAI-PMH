import * as mongoose from 'mongoose';
export declare const dbProvide: {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
}[];
export declare const genericProvider: {
    provide: string;
    useFactory: (connection: mongoose.Connection) => mongoose.Model<mongoose.Document, {}>;
    inject: string[];
}[];
