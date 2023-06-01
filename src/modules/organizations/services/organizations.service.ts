import { Injectable } from '@nestjs/common';
import { OrganizationRegisterDto } from '@organizations/models/dto/organization-register.dto';
import { OrganizationEntity } from '@organizations/models/entities/organization.entity';
import { In } from 'typeorm';
import { ClubEntity } from '@clubs/models/entities/club.entity';
import { ClubRepository } from '@clubs/models/repositories/club.repository';
import { OrganizationRepository } from '@organizations/models/repositories/organization.repository';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly organizationRepository: OrganizationRepository,
    private readonly clubRepository: ClubRepository,
  ) {}

  async findAll(): Promise<OrganizationEntity[]> {
    return await this.organizationRepository.find({
      relations: ['clubs'],
    });
  }

  async seed(): Promise<OrganizationEntity[]> {
    const organizations: OrganizationEntity[] = [];
    for (let i = 1; i <= 20; i++) {
      const organization: OrganizationEntity = {
        name: `Organización ${i}`,
      };
      organizations.push(organization);
    }
    return await this.organizationRepository.save(organizations);
  }

  async create(
    organizationRegisterDto: OrganizationRegisterDto,
  ): Promise<OrganizationEntity> {
    const organization: OrganizationEntity = {
      name: organizationRegisterDto.name,
    };
    const clubs = await this.clubRepository.findBy({
      id: In(organizationRegisterDto.clubsIds),
    });
    clubs.forEach((club: ClubEntity) => {
      club.organization = organization;
    });
    organization.clubs = clubs;
    return await this.organizationRepository.save(organization);
  }

  async updateClubs(
    organizationId: number,
    clubsIds: number[],
  ): Promise<OrganizationEntity> {
    const organization: OrganizationEntity =
      await this.organizationRepository.findOne({
        where: {
          id: organizationId,
        },
      });
    const clubs = await this.clubRepository.findBy({
      id: In(clubsIds),
    });
    clubs.forEach((club: ClubEntity) => {
      club.organization = organization;
    });
    organization.clubs = clubs;
    return await this.organizationRepository.save(organization);
  }
}
