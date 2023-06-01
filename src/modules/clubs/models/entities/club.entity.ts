import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrganizationEntity } from '@organizations/models/entities/organization.entity';
import { ClubCategoryEntity } from '@clubs-categories/models/entities/club-category.entity';

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

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt?: Date;

  @ManyToOne(() => ClubEntity, (club) => club.organization)
  @JoinColumn({
    name: 'organization_id',
    referencedColumnName: 'id',
  })
  organization?: OrganizationEntity;

  @OneToMany(() => ClubCategoryEntity, (clubCategory) => clubCategory.club)
  clubCategories?: ClubCategoryEntity[];
}
