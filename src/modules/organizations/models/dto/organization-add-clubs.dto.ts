import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";
import { Expose } from "class-transformer";

export class OrganizationAddClubsDto {
    @Expose({
        name: 'organization_id',
    })
    @IsNotEmpty({
        message: 'organization_id should not be empty'
    })
    @IsNumber(
        {},
        {
            message: 'organization_id must be a number'
        },
    )
    organizationId: number;

    @Expose({
        name: 'clubs_ids',
    })
    @IsNotEmpty({
        message: 'clubs_ids should not be empty'
    })
    @IsNumber({}, {
        each: true,
        message: "each value in clubs_ids must be a mongodb id"
    })
    clubsIds: number[];
}