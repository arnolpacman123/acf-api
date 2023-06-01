import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { OrganizationEntity } from '@organizations/models/entities/organization.entity';

@Injectable()
export class OrganizationRepository extends Repository<OrganizationEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(OrganizationEntity, dataSource.createEntityManager());
  }
}
