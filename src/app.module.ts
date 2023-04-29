import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@users/users.module';
import { ChampionshipsModule } from '@championships/championships.module';
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtOptions } from "@constants/jwt-constants";
import { OrganizationsModule } from '@organizations/organizations.module';
import { ClubsModule } from '@clubs/clubs.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://arnolguevara:aspirine@cluster0.vlohb.mongodb.net/acf_db?retryWrites=true&w=majority'),
        UsersModule,
        ChampionshipsModule,
        JwtModule.register(jwtOptions),
        OrganizationsModule,
        ClubsModule,
    ],
    controllers: [ AppController ],
    providers: [ AppService, JwtService ],
})
export class AppModule {
}
