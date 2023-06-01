import { Module } from '@nestjs/common';
import { ClubsController } from '@clubs/controllers/clubs.controller';
import { ClubsService } from '@clubs/services/clubs.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClubEntity } from "@clubs/models/entities/club.entity";
import { ClubRepository } from '@clubs/models/repositories/club.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ClubEntity,
        ]),
    ],
    controllers: [ ClubsController ],
    providers: [ ClubRepository, ClubsService ],
    exports: [ ClubsService ],
})
export class ClubsModule {
}
