import { PartialType } from '@nestjs/mapped-types';
import { ChampionshipCreateDto } from './championship-create.dto';

export class ChampionshipUpdateDto extends PartialType(ChampionshipCreateDto) {
}