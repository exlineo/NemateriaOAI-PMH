import { Test, TestingModule } from '@nestjs/testing';
import { ListRecordsController } from './list-records.controller';

describe('ListRecordsController', () => {
  let controller: ListRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListRecordsController],
    }).compile();

    controller = module.get<ListRecordsController>(ListRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
