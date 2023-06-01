import { Injectable } from '@nestjs/common';
import { ClubEntity } from '@clubs/models/entities/club.entity';
import { ClubRepository } from '@clubs/models/repositories/club.repository';

@Injectable()
export class ClubsService {
  constructor(
    private readonly clubRepository: ClubRepository,
  ) {}

  async findAll(): Promise<ClubEntity[]> {
    const clubs = await this.clubRepository.find({
      relations: {
        clubCategories: {
          category: true,
        },
      },
    });

    return clubs.map((club) => {
      const { clubCategories, ...rest } = club;

      const categories = clubCategories.map((clubCategory) => {
        return clubCategory.category;
      });

      return {
        ...rest,
        categories,
      };
    });
  }

  async seed(): Promise<ClubEntity[]> {
    const clubs: ClubEntity[] = [
      { name: '24 DE SEPTIEMBRE' },
      { name: '25 DE JUNIO' },
      { name: 'ADOLFO FLORES' },
      { name: 'AGUIA BRASIL' },
      { name: 'AMBORO' },
      { name: 'ARGENTINOS JRS' },
      { name: 'BANCRUZ' },
      { name: 'BLOOMING' },
      { name: 'CALLEJA' },
      { name: 'CDC MILTON MELGAR' },
      { name: 'CEI-UNE' },
      { name: 'CRACK FC' },
      { name: 'CRISTO REY' },
      { name: 'DEP INTEGRALES' },
      { name: 'DEPORTIVO AMERICA' },
      { name: 'DEPORTIVO SANTA CRUZ' },
      { name: 'DESTROYERS' },
      { name: 'DON BOSCO PORTACHUELO' },
      { name: 'EL SEMILLERO' },
      { name: 'ELITE PSC' },
      { name: 'ESPERANZA' },
      { name: 'ESTUDIANTES DEL NORTE I' },
      { name: 'FABRILES FC' },
      { name: 'FLORIDA' },
      { name: 'FORMANDO TALENTOS' },
      { name: 'GALACTICOS' },
      { name: 'GUABIRA' },
      { name: 'GUARAYECO' },
      { name: 'INDEPENDENT' },
      { name: 'INTERNACIONAL DE SC' },
      { name: 'JMP SOCCER' },
      { name: 'LA CANTERA' },
      { name: 'LA GUARDIA' },
      { name: 'LEONES PFC' },
      { name: 'MAQUINA CELESTE' },
      { name: 'MAQUINITA' },
      { name: 'MEGACENTER' },
      { name: 'NACIONAL COTOCA' },
      { name: 'NUEVA SANTA CRUZ FC' },
      { name: 'NUEVA SC ACADEMIA FC' },
      { name: 'ORIENTE PETROLERO' },
      { name: 'PASTA DE CAMPEONES' },
      { name: 'PLANETA FC' },
      { name: 'RAYO 3000' },
      { name: 'REAL CAMBA' },
      { name: 'REAL MONTERO' },
      { name: 'REAL SC' },
      { name: 'ROYAL PARI' },
      { name: 'SAGUAPAC' },
      { name: 'SAN FELIPE' },
      { name: 'SAN JORGE' },
      { name: 'SAN MARTIN' },
      { name: 'SEBASTIAN PAGADOR' },
      { name: 'SOLARES FC' },
      { name: 'TAHUICHI' },
      { name: 'TAMAYA JIMENEZ' },
      { name: 'TORITO GARCIA' },
      { name: 'TORRE FUERTE' },
      { name: 'UEB' },
      { name: 'UNION GODOY' },
      { name: 'UNIVERSIDAD GRM' },
      { name: 'URBARI' },
      { name: 'VIRGINIA USC' },
      { name: 'YOTAU' },
      { name: 'DEP. INDEPENDIENTE' },
      { name: 'POTRERO DE CAMPEONES' },
      { name: 'ATLETICO HURACAN' },
      { name: '10 DE FEBRERO' },
      { name: '19 DE MARZO' },
      { name: 'FERROVIARIO' },
      { name: 'LOS ANDES' },
    ];
    return await this.clubRepository.save(clubs);
  }
}
