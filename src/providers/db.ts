import * as mongoose from 'mongoose';
import { SERV_ADR } from '../config';
import { GenericSchema } from '../models/schemas/pmh.schemas';
import { GENERIC_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const dbProvide = [
  {
    provide: DB_PROVIDER,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(SERV_ADR, { useNewUrlParser: true }),
  },
];

export const genericProvider = [
  {
    provide: GENERIC_MODEL_PROVIDER,
    useFactory: (connection: mongoose.Connection) => connection.model('Generic', GenericSchema),
    inject: [DB_PROVIDER],
  },
];