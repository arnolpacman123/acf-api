import { Module } from '@nestjs/common';
import { ClubsController } from './controllers/clubs.controller';
import { ClubsService } from './services/clubs.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Club, ClubSchema } from "./models/schemas/club.schema";

@Module({
  imports: [
      MongooseModule.forFeature([
            { name: Club.name, schema: ClubSchema },
      ]),
  ],
  controllers: [ClubsController],
  providers: [ClubsService]
})
export class ClubsModule {}
