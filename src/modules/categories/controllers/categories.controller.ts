import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from "@categories/services/categories.service";

@Controller('categories')
export class CategoriesController {

    constructor(
        private readonly categoriesService: CategoriesService,
    ) {
    }

    @Get()
    async findAll() {
        return await this.categoriesService.findAll();
    }

    @Get('seed')
    async seed() {
        return await this.categoriesService.seed();
    }

}
