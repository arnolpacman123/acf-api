import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '@categories/models/entities/category.entity';
import { CategoryRepository } from '@categories/models/repositories/category.repository';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
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
