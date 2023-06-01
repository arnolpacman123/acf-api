import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoriesService } from '@categories/services/categories.service';
import { JwtAuthGuard } from '@core/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Get('seed')
  async seed() {
    return await this.categoriesService.seed();
  }
}
