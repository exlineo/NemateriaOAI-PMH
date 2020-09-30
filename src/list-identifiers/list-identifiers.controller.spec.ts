import { Test, TestingModule } from '@nestjs/testing';
import { ListIdentifiersController } from './list-identifiers.controller';

describe('ListIdentifiersController', () => {
  let controller: ListIdentifiersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListIdentifiersController],
    }).compile();

    controller = module.get<ListIdentifiersController>(ListIdentifiersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
