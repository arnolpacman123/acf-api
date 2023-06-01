import { CategoryEntity } from '@categories/models/entities/category.entity';
import { ClubEntity } from '@clubs/models/entities/club.entity';
import { RegisteredTeamEntity } from '@registered-teams/models/entities/registered-team.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToMany(
    () => RegisteredTeamEntity,
    (registeredTeam) => registeredTeam.clubCategory,
  )
  registeredTeams?: RegisteredTeamEntity[];
}
