import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetRecordController } from './get-record/get-record.controller';
import { IdentifyController } from './identify/identify.controller';
import { ListIdentifiersController } from './list-identifiers/list-identifiers.controller';
import { ListMetadataFormatsController } from './list-metadata-formats/list-metadata-formats.controller';
import { ListRecordsController } from './list-records/list-records.controller';
import { ListSetsController } from './list-sets/list-sets.controller';

@Module({
  imports: [],
  controllers: [AppController, GetRecordController, IdentifyController, ListIdentifiersController, ListMetadataFormatsController, ListRecordsController, ListSetsController],
  providers: [AppService],
})
export class AppModule {}
