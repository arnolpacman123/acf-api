import { ChampionshipEntity } from '@championships/models/entities/championship.entity';
import { ClubCategoryEntity } from '@clubs-categories/models/entities/club-category.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'registered_teams',
})
export class RegisteredTeamEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(
    () => ClubCategoryEntity,
    (clubCategory) => clubCategory.registeredTeams,
  )
  @JoinColumn({
    name: 'club_category_id',
  })
  clubCategory?: ClubCategoryEntity;

  @ManyToOne(
    () => ChampionshipEntity,
    (championship) => championship.registeredTeams,
  )
  @JoinColumn({
    name: 'championship_id',
  })
  championship?: ChampionshipEntity;
}
