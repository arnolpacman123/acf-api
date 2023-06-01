import { Module } from '@nestjs/common';
import { OrganizationsController } from '@organizations/controllers/organizations.controller';
import { OrganizationsService } from '@organizations/services/organizations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationEntity } from '@organizations/models/entities/organization.entity';
import { ClubsModule } from '@clubs/clubs.module';
import { OrganizationRepository } from '@organizations/models/repositories/organization.repository';
import { ClubRepository } from '@clubs/models/repositories/club.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationEntity]), ClubsModule],
  controllers: [OrganizationsController],
  providers: [OrganizationRepository, ClubRepository, OrganizationsService],
})
export class OrganizationsModule {}
