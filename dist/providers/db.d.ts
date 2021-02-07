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
export declare const noticeProvider: {
    provide: string;
    useFactory: (connection: mongoose.Connection) => mongoose.Model<mongoose.Document, {}>;
    inject: string[];
}[];
export declare const idProvider: {
    provide: string;
    useFactory: (connection: mongoose.Connection) => mongoose.Model<mongoose.Document, {}>;
    inject: string[];
}[];
export declare const setProvider: {
    provide: string;
    useFactory: (connection: mongoose.Connection) => mongoose.Model<mongoose.Document, {}>;
    inject: string[];
}[];
export declare const filtreProvider: {
    provide: string;
    useFactory: (connection: mongoose.Connection) => mongoose.Model<mongoose.Document, {}>;
    inject: string[];
}[];
