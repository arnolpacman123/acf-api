import { DataSource, Repository } from 'typeorm';
import { ClubEntity } from '@clubs/models/entities/club.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClubRepository extends Repository<ClubEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ClubEntity, dataSource.createEntityManager());
  }
}
