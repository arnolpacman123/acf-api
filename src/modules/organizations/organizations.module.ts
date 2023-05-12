import { Module } from '@nestjs/common';
import { OrganizationsController } from '@organizations/controllers/organizations.controller';
import { OrganizationsService } from '@organizations/services/organizations.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrganizationEntity } from "@organizations/models/entities/organization.entity";
import { ClubsModule } from "@clubs/clubs.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OrganizationEntity,
        ]),
        ClubsModule,
    ],
    controllers: [ OrganizationsController ],
    providers: [ OrganizationsService ]
})
export class OrganizationsModule {
}
