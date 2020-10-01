import { Test, TestingModule } from '@nestjs/testing';
import { PmhService } from './pmh.service';

describe('PmhService', () => {
  let service: PmhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmhService],
    }).compile();

    service = module.get<PmhService>(PmhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
