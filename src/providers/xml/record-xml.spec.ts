import { Test, TestingModule } from '@nestjs/testing';
import { RecordXml } from './record-xml';

describe('RecordXml', () => {
  let provider: RecordXml;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordXml],
    }).compile();

    provider = module.get<RecordXml>(RecordXml);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
