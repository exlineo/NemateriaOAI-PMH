import { Test, TestingModule } from '@nestjs/testing';
import { FiltreXml } from './filtre-xml';

describe('FiltreXml', () => {
  let provider: FiltreXml;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiltreXml],
    }).compile();

    provider = module.get<FiltreXml>(FiltreXml);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
