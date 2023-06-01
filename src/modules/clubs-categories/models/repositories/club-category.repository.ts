import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ClubCategoryEntity } from '@clubs-categories/models/entities/club-category.entity';

@Injectable()
export class ClubCategoryRepository extends Repository<ClubCategoryEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ClubCategoryEntity, dataSource.createEntityManager());
  }
}
