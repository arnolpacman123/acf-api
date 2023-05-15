import { Injectable } from '@nestjs/common';
import { ChampionshipRegisterDto } from "@championships/models/dto/championship-register.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipEntity } from "@championships/models/entities/championship.entity";
import { Repository } from "typeorm";

@Injectable()
export class ChampionshipsService {

    constructor(
        @InjectRepository(ChampionshipEntity)
        private readonly championshipRepository: Repository<ChampionshipEntity>,
    ) {
    }

    async findAll(): Promise<ChampionshipEntity[]> {
        return await this.championshipRepository.find();
    }

    async seed(): Promise<ChampionshipEntity[]> {
        const championships: ChampionshipEntity[] = [];
        for (let i = 0; i < 14; i++) {
            const startDate = new Date(`20${ 10 + i }-01-01`);
            console.log(startDate);

            const championship: ChampionshipEntity = {
                name: `Campeonato ACF 20${ 10 + i }`,
                description: `Campeonato de fútbol de 20${ 10 + i }`,
                startDate: new Date(`20${ 10 + i }-01-01`),
            };
            championships.push(championship);
        }

        return await this.championshipRepository.save(championships);
    }

    async create(championshipRegisterDto: ChampionshipRegisterDto): Promise<ChampionshipEntity> {
        return await this.championshipRepository.save(championshipRegisterDto);
    }
}
