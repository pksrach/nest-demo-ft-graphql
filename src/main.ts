import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();

const url = process.env.URL || `http://${host}:${port}`;
console.log(`Server is running on ${url}`);
