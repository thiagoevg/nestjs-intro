import { NestFactory } from '@nestjs/core';

// AppModule contains all the information related to the routes and schemas.
import { AppModule } from './app.module';

async function bootstrap() {
  // The Nestjs throghout the NestFactory performs under de hood a similar function perfomed by the express routes.
  const app = await NestFactory.create(AppModule);

  // Set the app to listen the port 9000
  app.listen(9000);
}

bootstrap();
