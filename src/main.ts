import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const serverConfig = config.get('server');

  const app = await NestFactory.create(AppModule);
  console.log('Node env ', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  }

  const port = 3000;
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
