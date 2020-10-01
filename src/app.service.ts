import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Serveur OAI-PMH Nemateria';
  }
}
