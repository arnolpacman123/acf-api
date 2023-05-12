import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'users'
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: 'varchar',
    })
    name: string;

    @Column({
        type: 'varchar',
    })
    lastname: string;

    @Column({
        type: 'varchar',
        unique: true,
    })
    ci: string;

    @Column({
        type: 'varchar',
    })
    password: string;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt?: Date;
}