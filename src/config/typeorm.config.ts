import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// console.log(process.env.POSTGRES_USER);
// console.log(process.env.POSTGRES_PASSWORD);
// console.log(process.env.POSTGRES_DB);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres-cluster-ip-service',
  port: 5432,
  username: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DB!,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
