import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubCategoryEntity } from 'src/modules/clubs-categories/models/entities/club-category.entity';

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

  @OneToMany(() => ClubCategoryEntity, (clubCategory) => clubCategory.category)
  clubCategories?: ClubCategoryEntity[];
}
