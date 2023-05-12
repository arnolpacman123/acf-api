import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'postgresql-arnolpacman123.alwaysdata.net',
    port: 5432,
    username: 'arnolpacman123',
    password: 'Aspirine217021220',
    database: 'arnolpacman123_acf_db',
    entities: [ __dirname + '/../**/*.entity.{js,ts}' ],
    synchronize: true,
    autoLoadEntities: true,
};