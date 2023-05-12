import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ClubEntity } from "@clubs/models/entities/club.entity";

@Entity({
    name: 'organizations'
})
export class OrganizationEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: 'varchar',
    })
    name: string;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt?: Date;

    @OneToMany(
        () => ClubEntity, (club) => club.organization,
    )
    clubs?: ClubEntity[];
}