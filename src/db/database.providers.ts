import * as mongoose from 'mongoose';
// import { DB_PROVIDER } from '../constants';
import { SERV_ADR } from '../config';

export const databaseProviders = [
    {
        provide: 'DB_PROVIDER',
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect(SERV_ADR, { useNewUrlParser: true });
        },
    },
];