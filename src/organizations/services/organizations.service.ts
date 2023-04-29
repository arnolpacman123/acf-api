import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Organization, OrganizationDocument } from "@organizations/models/schemas/organization.schema";
import { OrganizationRegisterDto } from "@organizations/models/dto/organization-register.dto";

@Injectable()
export class OrganizationsService {

    constructor(
        @InjectModel(Organization.name)
        private readonly organizationModel: Model<OrganizationDocument>,
    ) {
    }

    async findAll(): Promise<Organization[]> {
        return this.organizationModel.find().populate('clubs').sort({
            _id: 'desc',
        }).exec();
    }

    async seed(): Promise<Organization[]> {
        const organizations: Organization[] = [];
        for (let i = 1; i <= 20; i++) {
            const organization: Organization = {
                name: `Organización ${ i }`,
            };
            organizations.push(organization);
        }
        return this.organizationModel.insertMany(organizations);
    }

    async create(organizationRegisterDto: OrganizationRegisterDto): Promise<Organization> {
        const organization: Organization = {
            name: organizationRegisterDto.name,
            clubs: organizationRegisterDto.clubs,
        };
        return this.organizationModel.create({
            name: organization.name,
            clubs: organization.clubs,
        });
    }

    async updateClubs(organizationId: string, clubsIds: string[]): Promise<Organization> {
        return this.organizationModel.findOneAndUpdate({
            _id: organizationId,
        }, {
            $set: {
                clubs: clubsIds,
            },
        }, { new: true }).populate('clubs').exec();
    }
}
