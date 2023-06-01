import { CategoryEntity } from '@categories/models/entities/category.entity';
import { ClubEntity } from '@clubs/models/entities/club.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'clubs_categories',
})
export class ClubCategoryEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => CategoryEntity, (club) => club.clubCategories)
  @JoinColumn({
    name: 'category_id',
  })
  category?: CategoryEntity;

  @ManyToOne(() => ClubEntity, (club) => club.clubCategories)
  @JoinColumn({
    name: 'club_id',
  })
  club?: ClubEntity;
}
