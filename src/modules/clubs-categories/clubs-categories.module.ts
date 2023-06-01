import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubCategoryEntity } from '@clubs-categories/models/entities/club-category.entity';
import { ClubsCategoriesService } from '@clubs-categories/services/clubs-categories.service';
import { CategoriesModule } from '@categories/categories.module';
import { ClubsModule } from '@clubs/clubs.module';
import { ClubsCategoriesController } from '@clubs-categories/controllers/clubs-categories.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClubCategoryEntity]),
    CategoriesModule,
    ClubsModule,
  ],
  providers: [ClubsCategoriesService],
  controllers: [ClubsCategoriesController],
})
export class ClubsCategoriesModule {}
