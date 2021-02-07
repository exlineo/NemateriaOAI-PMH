import { Test, TestingModule } from '@nestjs/testing';
import { MetaXml } from './meta-xml';

describe('MetaXml', () => {
  let provider: MetaXml;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaXml],
    }).compile();

    provider = module.get<MetaXml>(MetaXml);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
