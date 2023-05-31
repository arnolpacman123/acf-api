import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ChampionshipsService } from '@championships/services/championships.service';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import {
  ChampionshipCreateDto,
  ChampionshipUpdateDto,
} from '@championships/models/dto';

@UseGuards(JwtAuthGuard)
@Controller('championships')
export class ChampionshipsController {
  constructor(private readonly championshipsService: ChampionshipsService) {}

  @Get()
  async findAll() {
    return await this.championshipsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.championshipsService.findOne(+id);
  }

  @Post()
  async create(@Body() championshipCreateDto: ChampionshipCreateDto) {
    return await this.championshipsService.create(championshipCreateDto);
  }

  
  @Get('seed')
  async seed() {
    return await this.championshipsService.seed();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() championshipUpdateDto: ChampionshipUpdateDto,
  ) {
    return await this.championshipsService.update(+id, championshipUpdateDto);
  }
}
