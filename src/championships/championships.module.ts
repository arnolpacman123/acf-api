import { Module } from '@nestjs/common';
import { ChampionshipsController } from './controllers/championships.controller';
import { ChampionshipsService } from './services/championships.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Championship, ChampionshipSchema } from "@championships/models/schemas/championship.schema";
import { JwtStrategy } from "@strategies/jwt.strategy";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Championship.name, schema: ChampionshipSchema, }
        ]),
    ],
    controllers: [ ChampionshipsController ],
    providers: [ ChampionshipsService, JwtStrategy ]
})
export class ChampionshipsModule {
}
