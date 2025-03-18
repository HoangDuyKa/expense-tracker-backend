import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeDatabase } from './data-source';

async function bootstrap() {
  await initializeDatabase(); // ⚡ Chạy tạo database trước khi khởi động app
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
