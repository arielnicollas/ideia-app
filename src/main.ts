declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule ,{ cors: true });
  app.use(json());
  await app.listen(process.env.PORT ?? 3000);

  // app.enableCors({
  //   origin: 'http://localhost:4200', // Permite apenas este domínio
  //   methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
  //   allowedHeaders: 'Content-Type, Accept, Authorization', // Headers permitidos
  //   credentials: true, // Permitir envio de cookies
  // });

  if(module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close())
  }
}
bootstrap();
