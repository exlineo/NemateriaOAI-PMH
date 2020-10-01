import { Test, TestingModule } from '@nestjs/testing';
import { Xml } from './xml';

describe('Xml', () => {
  let provider: Xml;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Xml],
    }).compile();

    provider = module.get<Xml>(Xml);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
