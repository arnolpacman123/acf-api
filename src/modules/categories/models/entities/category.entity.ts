import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ClubEntity } from "@clubs/models/entities/club.entity";

@Entity({
    name: 'categories',
})
export class CategoryEntity {
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

    @ManyToMany(
        () => ClubEntity, (club) => club.categories,
    )
    @JoinTable({
        name: 'clubs_categories',
        joinColumn: {
            name: 'category_id',
        },
        inverseJoinColumn: {
            name: 'club_id',
        },
    })
    clubs?: ClubEntity[];
}