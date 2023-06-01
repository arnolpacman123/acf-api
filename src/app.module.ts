import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '@users/users.module';
import { ChampionshipsModule } from '@championships/championships.module';
import { OrganizationsModule } from '@organizations/organizations.module';
import { ClubsModule } from '@clubs/clubs.module';
import { CategoriesModule } from '@categories/categories.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtOptions } from '@constants/jwt-constants';
import { typeOrmConfig } from '@constants/orm-config-options';
import { ClubsCategoriesModule } from '@clubs-categories/clubs-categories.module';
import { RegisteredTeamsModule } from '@registered-teams/registered-team.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    JwtModule.register(jwtOptions),
    UsersModule,
    ChampionshipsModule,
    OrganizationsModule,
    ClubsModule,
    CategoriesModule,
    ClubsCategoriesModule,
    RegisteredTeamsModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
