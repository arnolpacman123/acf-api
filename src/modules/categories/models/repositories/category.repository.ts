import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from '@categories/models/entities/category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository extends Repository<CategoryEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
  }
}
