import { Test, TestingModule } from '@nestjs/testing';
import { GetRecordController } from './get-record.controller';

describe('GetRecordController', () => {
  let controller: GetRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetRecordController],
    }).compile();

    controller = module.get<GetRecordController>(GetRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
