import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "@categories/models/schema/category.schema";

@Module({
  imports: [
      MongooseModule.forFeature([
            { name: Category.name, schema: CategorySchema },
      ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
