import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrganizationEntity } from '@organizations/models/entities/organization.entity';
import { CategoryEntity } from '@categories/models/entities/category.entity';
import { ClubCategoryEntity } from 'src/modules/clubs-categories/models/entities/club-category.entity';

@Entity({
  name: 'clubs',
})
export class ClubEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
  })
  name?: string;

  @ManyToOne(() => ClubEntity, (club) => club.organization)
  @JoinColumn({
    name: 'organization_id',
    referencedColumnName: 'id',
  })
  organization?: OrganizationEntity;

  @OneToMany(() => ClubCategoryEntity, (clubCategory) => clubCategory.club)
  clubCategories?: ClubCategoryEntity[];
}
