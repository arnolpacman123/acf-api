import { Module } from '@nestjs/common';
import { OrganizationsController } from './controllers/organizations.controller';
import { OrganizationsService } from './services/organizations.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Organization, OrganizationSchema } from "@organizations/models/schemas/organization.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Organization.name, schema: OrganizationSchema }
        ]),
    ],
    controllers: [ OrganizationsController ],
    providers: [ OrganizationsService ]
})
export class OrganizationsModule {
}
