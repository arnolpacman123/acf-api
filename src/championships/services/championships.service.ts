import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Championship, ChampionshipDocument } from "@championships/models/schemas/championship.schema";
import { Model } from "mongoose";
import { ChampionshipRegisterDto } from "@championships/models/dto/championship-register.dto";

@Injectable()
export class ChampionshipsService {

    constructor(
        @InjectModel(Championship.name)
        private readonly championshipModel: Model<ChampionshipDocument>,
    ) {
    }

    async findAll(): Promise<Championship[]> {
        return this.championshipModel.find().sort({
            _id: 'desc',
        }).exec();
    }

    async seed(): Promise<Championship[]> {
        const championships: Championship[] = [];
        for (let i = 0; i < 14; i++) {
            const championship: Championship = {
                name: `Campeonato ACF 20${ 10 + i }`,
                description: `Campeonato de fútbol de 20${ 10 + i }`,
                startDate: new Date(`20${ 10 + i }-01-01`),
            };
            championships.push(championship);
        }

        return await this.championshipModel.insertMany(championships);
    }

    async create(championshipRegisterDto: ChampionshipRegisterDto): Promise<Championship> {
        const championship = new this.championshipModel(championshipRegisterDto);
        return await championship.save();
    }
}
