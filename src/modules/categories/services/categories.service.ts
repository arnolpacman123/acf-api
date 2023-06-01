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
    return await this.categoryRepository.find({
      relations: {
        clubCategories: {
          club: true,
        },
      },
    });
  }

  async findBy(
    params: FindOptionsWhere<CategoryEntity> | FindOptionsWhere<CategoryEntity>[],
  ): Promise<CategoryEntity> {
    return await this.categoryRepository.findOneBy(params);
  }

  // async seed(): Promise<CategoryEntity[]> {
  //     const clubsSub19Ids: number[] = [
  //         1,
  //         3,
  //         6,
  //         7,
  //         8,
  //         9,
  //         24,
  //         32,
  //         35,
  //         38,
  //         43,
  //         50,
  //         59,
  //         61,
  //         63
  //     ];
  //     const clubsSub19 = await this.clubsService.findByIds(clubsSub19Ids);

  //     const clubsSub17Ids: number[] = [
  //         2,
  //         4,
  //         5,
  //         6,
  //         7,
  //         8,
  //         9,
  //         10,
  //         11,
  //         12,
  //         14,
  //         16,
  //         17,
  //         18,
  //         20,
  //         21,
  //         22,
  //         24,
  //         25,
  //         27,
  //         29,
  //         31,
  //         33,
  //         35,
  //         36,
  //         38,
  //         41,
  //         42,
  //         43,
  //         47,
  //         48,
  //         50,
  //         51,
  //         52,
  //         56,
  //         60,
  //         61,
  //         65,
  //         66,
  //         67,
  //         68,
  //         69,
  //         70,
  //         71,
  //     ];
  //     const clubsSub17 = await this.clubsService.findByIds(clubsSub17Ids);

  //     const clubsSub15Ids: number[] = [
  //         4,
  //         5,
  //         8,
  //         9,
  //         15,
  //         19,
  //         20,
  //         24,
  //         26,
  //         29,
  //         30,
  //         35,
  //         37,
  //         43,
  //         46,
  //         50,
  //         54,
  //         57,
  //         63,
  //         64,
  //     ];
  //     const clubsSub15 = await this.clubsService.findByIds(clubsSub15Ids);

  //     const clubsSub14Ids: number[] = [
  //         16,
  //         37,
  //         43,
  //         44,
  //         49,
  //         50,
  //         62,
  //         63,
  //     ];
  //     const clubsSub14 = await this.clubsService.findByIds(clubsSub14Ids);

  //     const clubsSub13Ids: number[] = [
  //         5,
  //         8,
  //         9,
  //         13,
  //         15,
  //         19,
  //         20,
  //         24,
  //         30,
  //         32,
  //         35,
  //         37,
  //         39,
  //         43,
  //         46,
  //         49,
  //         50,
  //         53,
  //         54,
  //         62,
  //         63,
  //     ];
  //     const clubsSub13 = await this.clubsService.findByIds(clubsSub13Ids);

  //     const clubsSub12Ids: number[] = [
  //         7,
  //         9,
  //         16,
  //         19,
  //         20,
  //         22,
  //         24,
  //         26,
  //         37,
  //         39,
  //         43,
  //         44,
  //         62,
  //         64,
  //     ];
  //     const clubsSub12 = await this.clubsService.findByIds(clubsSub12Ids);

  //     const clubsSub11Ids: number[] = [
  //         8,
  //         9,
  //         13,
  //         15,
  //         18,
  //         19,
  //         24,
  //         37,
  //         40,
  //         43,
  //         45,
  //         50,
  //         57,
  //         62,
  //         63,
  //     ];
  //     const clubsSub11 = await this.clubsService.findByIds(clubsSub11Ids);

  //     const clubsSub10Ids: number[] = [
  //         8,
  //         9,
  //         15,
  //         19,
  //         20,
  //         22,
  //         24,
  //         30,
  //         32,
  //         37,
  //         43,
  //         49,
  //         63,
  //     ];
  //     const clubsSub10 = await this.clubsService.findByIds(clubsSub10Ids);

  //     const clubsSub09Ids: number[] = [
  //         8,
  //         9,
  //         13,
  //         20,
  //         24,
  //         37,
  //         43,
  //         63,
  //         64,
  //     ];
  //     const clubsSub09 = await this.clubsService.findByIds(clubsSub09Ids);

  //     const clubsSub08Ids: number[] = [
  //         8,
  //         9,
  //         20,
  //         23,
  //         24,
  //         34,
  //         37,
  //         53,
  //     ];
  //     const clubsSub08 = await this.clubsService.findByIds(clubsSub08Ids);

  //     const clubsSub07Ids: number[] = [
  //         9,
  //         24,
  //         28,
  //         37,
  //         55,
  //         63,
  //     ];
  //     const clubsSub07 = await this.clubsService.findByIds(clubsSub07Ids);

  //     const categories: CategoryEntity[] = [
  //         { name: 'ASCENSO' },
  //         { name: 'SUB07', clubs: clubsSub07 },
  //         { name: 'SUB08', clubs: clubsSub08 },
  //         { name: 'SUB09', clubs: clubsSub09 },
  //         { name: 'SUB10', clubs: clubsSub10 },
  //         { name: 'SUB11', clubs: clubsSub11 },
  //         { name: 'SUB12', clubs: clubsSub12 },
  //         { name: 'SUB13', clubs: clubsSub13 },
  //         { name: 'SUB14', clubs: clubsSub14 },
  //         { name: 'SUB15', clubs: clubsSub15 },
  //         { name: 'SUB17', clubs: clubsSub17 },
  //         { name: 'SUB19', clubs: clubsSub19 },
  //     ];
  //     return await this.categoryRepository.save(categories);
  // }
}
