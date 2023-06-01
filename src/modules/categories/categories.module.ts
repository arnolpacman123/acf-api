import { Module } from '@nestjs/common';
import { CategoriesController } from '@categories/controllers/categories.controller';
import { CategoriesService } from '@categories/services/categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '@categories/models/entities/category.entity';
import { ClubsModule } from '@clubs/clubs.module';
import { CategoryRepository } from '@categories/models/repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), ClubsModule],
  controllers: [CategoriesController],
  providers: [CategoryRepository, CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
