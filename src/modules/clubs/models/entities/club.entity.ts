import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrganizationEntity } from "@organizations/models/entities/organization.entity";
import { CategoryEntity } from "@categories/models/entities/category.entity";

@Entity({
    name: 'clubs'
})
export class ClubEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: 'varchar',
    })
    name: string;

    // TODO: Add organization and categories
    @ManyToOne(
        () => ClubEntity, (club) => club.organization,)
    @JoinColumn({
        name: 'organization_id',
        referencedColumnName: 'id',
    })
    organization?: OrganizationEntity;

    @ManyToMany(
        () => CategoryEntity, (category) => category.clubs,
    )
    categories?: CategoryEntity[];
}