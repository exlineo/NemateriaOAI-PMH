import * as mongoose from 'mongoose';
import { SERV_ADR } from '../config';
import { GenericSchema, NoticeSchema, IdentifySchema, MetaSchema, SetSchema } from '../models/schemas/pmh.schemas';

/**
 * Provider pour l'accès à la base de données
 */
export const dbProvide = [
  {
    provide: 'DB_MODEL',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(SERV_ADR, { useNewUrlParser: true }),
  },
];

export const genericProvider = [
  {
    provide: 'GENERIC_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Generic', GenericSchema),
    inject: ['DB_MODEL'],
  },
];

/**
 * Provider pour récupérer les notices
 */
export const noticeProvider = [
  {
    provide: 'NOTICE_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Notice', NoticeSchema),
    inject: ['DB_MODEL'],
  },
];

/**
 * Provider pour récupérer les notices
 */
export const idProvider = [
  {
    provide: 'IDENTIFY_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Identify', IdentifySchema),
    inject: ['DB_MODEL'],
  },
];

/**
 * Provider pour récupérer les notices
 */
export const setProvider = [
  {
    provide: 'SET_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Set', SetSchema),
    inject: ['DB_MODEL'],
  },
];

/**
 * Provider pour récupérer les notices
 */
export const filtreProvider = [
  {
    provide: 'FILTRE_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Filtre', MetaSchema),
    inject: ['DB_MODEL'],
  },
];