import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'championships'
})
export class ChampionshipEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: 'varchar',
    })
    name: string;

    @Column({
        type: 'varchar',
    })
    description: string;

    @Column({
        type: 'timestamp',
        name: 'start_date'
    })
    startDate: Date;

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt?: Date;
}