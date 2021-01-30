import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'],
    cors: {
      origin: true,
      preflightContinue: false,
    }
  });
  // Préparer l'envoie de fichiers statiques
  app.use(express.static(join(process.cwd(), '../xml/')));

  console.log("Lancement du serveur");
  await app.listen(8081);
}
bootstrap();
