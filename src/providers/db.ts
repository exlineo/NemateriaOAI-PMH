import * as mongoose from 'mongoose';
import { SERV_ADR } from '../config';
import { GenericSchema } from '../models/schemas/pmh.schemas';

export const dbProvide = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(SERV_ADR, { useNewUrlParser: true }),
  },
];

export const genericProvider = [
  {
    provide: 'GENERIC_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Generic', GenericSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];