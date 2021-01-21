import { Test, TestingModule } from '@nestjs/testing';
import { SetXml } from './xml';

describe('Xml', () => {
  let provider: SetXml;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetXml],
    }).compile();

    provider = module.get<SetXml>(SetXml);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
