import { AddClubsToCategoryDto } from '@clubs-categories/models/dto';
import { ClubsCategoriesService } from '@clubs-categories/services/clubs-categories.service';
import { JwtAuthGuard } from '@core/guards/jwt-auth.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('clubs-categories')
export class ClubsCategoriesController {
  constructor(
    private readonly clubsCategoriesService: ClubsCategoriesService,
  ) {}

  @Get()
  async findAll() {
    return await this.clubsCategoriesService.findAll();
  }

  @Post('add-clubs-to-category')
  async addClubsToCategory(
    @Body() { clubsNames, categoryName }: AddClubsToCategoryDto,
  ) {
    return await this.clubsCategoriesService.addClubsToCategory(
      clubsNames,
      categoryName,
    );
  }

  @Get('seed')
  async seed() {
    return await this.clubsCategoriesService.seed();
  }
}
