import { DataSource, Repository } from 'typeorm';
import { RegisteredTeamEntity } from '@registered-teams/models/entities/registered-team.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisteredTeamRepository extends Repository<RegisteredTeamEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(RegisteredTeamEntity, dataSource.createEntityManager());
  }
}
