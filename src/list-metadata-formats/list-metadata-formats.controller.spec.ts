import { Test, TestingModule } from '@nestjs/testing';
import { ListMetadataFormatsController } from './list-metadata-formats.controller';

describe('ListMetadataFormatsController', () => {
  let controller: ListMetadataFormatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListMetadataFormatsController],
    }).compile();

    controller = module.get<ListMetadataFormatsController>(ListMetadataFormatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
