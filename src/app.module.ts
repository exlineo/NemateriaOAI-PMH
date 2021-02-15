import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenericSchema } from './models/schemas/pmh.schemas';

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
import { dbProvide, genericProvider, idProvider, noticeProvider, filtreProvider, setProvider } from './providers/db';

import { IdentifyXml } from './providers/xml/identify-xml';
import { RecordXml } from './providers/xml/record-xml';
import { SetXml } from './providers/xml/set-xml';
import { FiltreXml } from './providers/xml/filtre-xml';

@Module({
  // imports: [MongooseModule.forRoot(SERV_ADR)],
  controllers: [AppController, GetRecordController, IdentifyController, ListIdentifiersController, ListMetadataFormatsController, ListRecordsController, ListSetsController, RequestController],
  providers: [AppService, PmhService, ...dbProvide, ...genericProvider, ...idProvider, ...noticeProvider, ...filtreProvider, ...setProvider, IdentifyXml, RecordXml, SetXml, FiltreXml],
  exports:[...dbProvide, ...genericProvider, ...idProvider, ...noticeProvider, ...filtreProvider, ...setProvider]
})
export class AppModule {}
