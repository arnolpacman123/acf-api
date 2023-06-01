import { Module } from '@nestjs/common';
import { ChampionshipsController } from '@championships/controllers/championships.controller';
import { ChampionshipsService } from '@championships/services/championships.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChampionshipEntity } from "@championships/models/entities/championship.entity";
import { ChampionshipRepository } from '@championships/models/repositories/championship.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ChampionshipEntity
        ]),
    ],
    controllers: [ ChampionshipsController ],
    providers: [ ChampionshipRepository, ChampionshipsService ]
})
export class ChampionshipsModule {
}
