import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubCategoryEntity } from '@clubs-categories/models/entities/club-category.entity';
import { ClubsCategoriesService } from '@clubs-categories/services/clubs-categories.service';
import { ClubsCategoriesController } from '@clubs-categories/controllers/clubs-categories.controller';
import { ClubRepository } from '@clubs/models/repositories/club.repository';
import { CategoryRepository } from '@categories/models/repositories/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClubCategoryEntity]),
  ],
  providers: [ClubRepository, CategoryRepository, ClubsCategoriesService],
  controllers: [ClubsCategoriesController],
})
export class ClubsCategoriesModule {}
