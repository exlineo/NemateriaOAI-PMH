import { Test, TestingModule } from '@nestjs/testing';
import { IdentifyXml } from './identify-xml';

describe('IdentifyXml', () => {
  let provider: IdentifyXml;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentifyXml],
    }).compile();

    provider = module.get<IdentifyXml>(IdentifyXml);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
