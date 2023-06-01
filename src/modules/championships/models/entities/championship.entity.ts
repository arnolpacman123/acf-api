import { RegisteredTeamEntity } from '@registered-teams/models/entities/registered-team.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'championships',
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
    type: 'timestamp with time zone',
    name: 'start_date',
    transformer: {
      from: (value: Date) => {
        return value.toISOString().split('T')[0];
      },
      to: (value: Date) => value,
    },
  })
  startDate: Date;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt?: Date;

  @OneToMany(
    () => RegisteredTeamEntity,
    (registeredTeam) => registeredTeam.championship,
  )
  registeredTeams?: RegisteredTeamEntity[];
}
