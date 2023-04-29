import { IsMongoId, IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";

export class OrganizationAddClubsDto {
    @Expose({
        name: 'organization_id',
    })
    @IsNotEmpty({
        message: 'organization_id should not be empty'
    })
    @IsMongoId({
        message: "organization_id must be a mongodb id"
    })
    organizationId: string;

    @Expose({
        name: 'clubs_ids',
    })
    @IsNotEmpty({
        message: 'clubs_ids should not be empty'
    })
    @IsMongoId({
        each: true,
        message: "each value in clubs_ids must be a mongodb id"
    })
    clubsIds: string[];
}