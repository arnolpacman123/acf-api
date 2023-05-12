import { Module } from '@nestjs/common';
import { ChampionshipsController } from '@championships/controllers/championships.controller';
import { ChampionshipsService } from '@championships/services/championships.service';
import { JwtStrategy } from "@strategies/jwt.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChampionshipEntity } from "@championships/models/entities/championship.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ChampionshipEntity
        ]),
    ],
    controllers: [ ChampionshipsController ],
    providers: [ ChampionshipsService ]
})
export class ChampionshipsModule {
}
