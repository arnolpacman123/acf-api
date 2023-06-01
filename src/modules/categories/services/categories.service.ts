import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '@categories/models/entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.find({
      relations: {
        clubCategories: {
          club: true,
        },
      },
    });

    return categories.map((category) => {
      const { clubCategories, ...rest } = category;
      const clubs = clubCategories.map((clubCategory) => clubCategory.club);
      return { ...rest, clubs };
    });
  }

  async findBy(
    params:
      | FindOptionsWhere<CategoryEntity>
      | FindOptionsWhere<CategoryEntity>[],
  ): Promise<CategoryEntity> {
    return await this.categoryRepository.findOneBy(params);
  }

  async seed() {
    const categories: CategoryEntity[] = [
      { name: 'SUB19' },
      { name: 'SUB17' },
      { name: 'SUB15' },
      { name: 'SUB14' },
      { name: 'SUB13' },
      { name: 'SUB12' },
      { name: 'SUB11' },
      { name: 'SUB10' },
      { name: 'SUB09' },
      { name: 'SUB08' },
      { name: 'SUB07' },
    ];

    await this.categoryRepository.save(categories);
  }
}
