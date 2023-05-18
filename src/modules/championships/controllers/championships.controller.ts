import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ChampionshipsService } from "@championships/services/championships.service";
import { JwtAuthGuard } from "@guards/jwt-auth.guard";
import { ChampionshipRegisterDto } from "@championships/models/dto/championship-register.dto";

@UseGuards(JwtAuthGuard)
@Controller('championships')
export class ChampionshipsController {
    constructor(
        private readonly championshipsService: ChampionshipsService
    ) {
    }

    @Get()
    async findAll() {
        return await this.championshipsService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id') id: number,
    ) {
        return await this.championshipsService.findOne(+id);
    }

    @Post()
    async create(
        @Body() championshipRegisterDto: ChampionshipRegisterDto,
    ) {
        return await this.championshipsService.create(championshipRegisterDto);
    }

    @Get('seed')
    async seed() {
        return await this.championshipsService.seed();
    }
}
