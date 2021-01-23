import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenericSchema, SetSchema, RecordSchema, MetaSchema } from './models/schemas/pmh.schemas';

import { AppController } from './app.controller';
import { GetRecordController } from './get-record/get-record.controller';
import { IdentifyController } from './identify/identify.controller';
import { ListIdentifiersController } from './list-identifiers/list-identifiers.controller';
import { ListMetadataFormatsController } from './list-metadata-formats/list-metadata-formats.controller';
import { ListRecordsController } from './list-records/list-records.controller';
import { ListSetsController } from './list-sets/list-sets.controller';
import { RequestController } from './request/request.controller';

import { AppService } from './app.service';
import { PmhService } from './providers/services/pmh/pmh.service';
import { dbProvide, genericProvider } from './providers/db';

import { SetXml } from './providers/xml';
import { SERV_ADR } from './config';

@Module({
  imports: [MongooseModule.forRoot(SERV_ADR, [{ name: 'GENERIC', schema: GenericSchema }])],
  controllers: [AppController, GetRecordController, IdentifyController, ListIdentifiersController, ListMetadataFormatsController, ListRecordsController, ListSetsController, RequestController],
  providers: [AppService, SetXml, PmhService, ...dbProvide, ...genericProvider],
  exports:[...dbProvide]
})
export class AppModule {}
