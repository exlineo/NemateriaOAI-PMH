import { Test, TestingModule } from '@nestjs/testing';
import { ListSetsController } from './list-sets.controller';

describe('ListSetsController', () => {
  let controller: ListSetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListSetsController],
    }).compile();

    controller = module.get<ListSetsController>(ListSetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
