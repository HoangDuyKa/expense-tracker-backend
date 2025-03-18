import { DataSource } from 'typeorm';
import { createDatabase } from 'typeorm-extension';
import 'dotenv/config';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'yourpassword',
  database: process.env.DATABASE_NAME || 'expense_tracker',
  synchronize: true, // Tạo bảng tự động, nhưng cần có database trước
});

export const initializeDatabase = async () => {
  await createDatabase({ options: dataSource.options as any }); // 🛠 Tạo database nếu chưa có
  await dataSource.initialize();
};
