import { Injectable } from '@nestjs/common';
import { OrganizationRegisterDto } from "@organizations/models/dto/organization-register.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { OrganizationEntity } from "@organizations/models/entities/organization.entity";
import { Repository } from "typeorm";
import { ClubEntity } from "@clubs/models/entities/club.entity";
import { ClubsService } from "@clubs/services/clubs.service";

@Injectable()
export class OrganizationsService {

    constructor(
        @InjectRepository(OrganizationEntity)
        private readonly organizationRepository: Repository<OrganizationEntity>,
        private readonly clubsService: ClubsService,
    ) {
    }

    async findAll(): Promise<OrganizationEntity[]> {
        return await this.organizationRepository.find({
            relations: [ 'clubs' ],
        });
    }

    async seed(): Promise<OrganizationEntity[]> {
        const organizations: OrganizationEntity[] = [];
        for (let i = 1; i <= 20; i++) {
            const organization: OrganizationEntity = {
                name: `Organización ${ i }`,
            };
            organizations.push(organization);
        }
        return await this.organizationRepository.save(organizations);
    }

    async create(organizationRegisterDto: OrganizationRegisterDto): Promise<OrganizationEntity> {
        const organization: OrganizationEntity = {
            name: organizationRegisterDto.name,
        };
        const clubs = await this.clubsService.findByIds(organizationRegisterDto.clubsIds);
        clubs.forEach((club: ClubEntity) => {
            club.organization = organization;
        });
        organization.clubs = clubs;
        return await this.organizationRepository.save(organization);
    }

    async updateClubs(organizationId: number, clubsIds: number[]): Promise<OrganizationEntity> {
        const organization: OrganizationEntity = await this.organizationRepository.findOne({
            where: {
                id: organizationId,
            },
        });
        const clubs = await this.clubsService.findByIds(clubsIds);
        clubs.forEach((club: ClubEntity) => {
            club.organization = organization;
        });
        organization.clubs = clubs;
        return await this.organizationRepository.save(organization);
    }
}
