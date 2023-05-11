import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Category, CategoryDocument } from "@categories/models/schema/category.schema";
import { Model } from "mongoose";

@Injectable()
export class CategoriesService {

    constructor(
        @InjectModel(Category.name)
        private readonly categoryModel: Model<CategoryDocument>,
    ) {
    }

    async findAll(): Promise<Category[]> {
        return await this.categoryModel.find().populate('clubs').exec();
    }

    async seed(): Promise<Category[]> {
        const clubsSub19 = [
            "6444e483aa55c1d9b6df9838",
            "6444e483aa55c1d9b6df983a",
            "6444e483aa55c1d9b6df983d",
            "6444e483aa55c1d9b6df983e",
            "6444e483aa55c1d9b6df983f",
            "6444e483aa55c1d9b6df9840",
            "6444e483aa55c1d9b6df984f",
            "6444e483aa55c1d9b6df9857",
            "6444e483aa55c1d9b6df985a",
            "6444e483aa55c1d9b6df985d",
            "6444e483aa55c1d9b6df9862",
            "6444e483aa55c1d9b6df9869",
            "6444e483aa55c1d9b6df9872",
            "6444e483aa55c1d9b6df9874",
            "6444e483aa55c1d9b6df9876",
        ];
        const categories: Category[] = [
            { name: 'ASCENSO' },
            { name: 'SUB07' },
            { name: 'SUB08' },
            { name: 'SUB09' },
            { name: 'SUB10' },
            { name: 'SUB11' },
            { name: 'SUB12' },
            { name: 'SUB13' },
            { name: 'SUB14' },
            { name: 'SUB15' },
            { name: 'SUB17' },
            // { name: 'SUB19', clubs: clubsSub19 },
        ];
        return await this.categoryModel.insertMany(categories);
    }

}
