import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubCategoryEntity } from '@clubs-categories/models/entities/club-category.entity';
import { In } from 'typeorm';
import { ClubRepository } from '@clubs/models/repositories/club.repository';
import { CategoryRepository } from '@categories/models/repositories/category.repository';
import { ClubCategoryRepository } from '@clubs-categories/models/repositories/club-category.repository';
import { CategoryEntity } from '@categories/models/entities/category.entity';
import { ClubEntity } from '@clubs/models/entities/club.entity';

@Injectable()
export class ClubsCategoriesService {
  constructor(
    @InjectRepository(ClubCategoryEntity)
    private readonly clubCategoryRepository: ClubCategoryRepository,
    private readonly clubRepository: ClubRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async findAll() {
    return await this.clubCategoryRepository.find();
  }

  async findAllCategoryByClubId(clubId: number): Promise<CategoryEntity[]> {
    const categoriesClub = await this.clubCategoryRepository.find({
      where: {
        club: {
          id: clubId,
        },
      },
      relations: ['category'],
    });

    return categoriesClub.map((categoryClub) => {
      return categoryClub.category;
    });
  }

  async findAllClubsByCategoryId(categoryId: number): Promise<ClubEntity[]> {
    const clubsCategory = await this.clubCategoryRepository.find({
      where: {
        category: {
          id: categoryId,
        },
      },
      relations: ['club'],
    });

    return clubsCategory.map((clubCategory) => {
      return clubCategory.club;
    });
  }

  async addClubsToCategory(
    clubsNames: string[],
    categoryName: string,
  ): Promise<ClubCategoryEntity[]> {
    const clubs = await this.clubRepository.findBy({
      name: In(clubsNames),
    });

    const category = await this.categoryRepository.findOne({
      where: {
        name: categoryName,
      },
    });

    const clubsCategories = clubs.map((club) => {
      return {
        club,
        category,
      };
    });

    return await this.clubCategoryRepository.save(clubsCategories);
  }

  async seed(): Promise<ClubCategoryEntity[]> {
    const clubsSub19: string[] = [
      '24 DE SEPTIEMBRE',
      'ADOLFO FLORES',
      'ARGENTINOS JRS',
      'BANCRUZ',
      'BLOOMING',
      'CALLEJA',
      'FLORIDA',
      'LA CANTERA',
      'MAQUINA CELESTE',
      'NACIONAL COTOCA',
      'PLANETA FC',
      'SAN FELIPE',
      'UEB',
      'UNIVERSIDAD GRM',
      'VIRGINIA USC',
    ];

    const clubsSub17: string[] = [
      '25 DE JUNIO',
      'AGUIA BRASIL',
      'AMBORO',
      'ARGENTINOS JRS',
      'BANCRUZ',
      'BLOOMING',
      'CALLEJA',
      'CDC MILTON MELGAR',
      'CEI-UNE',
      'CRACK FC',
      'DEP INTEGRALES',
      'DEPORTIVO SANTA CRUZ',
      'DESTROYERS',
      'DON BOSCO PORTACHUELO',
      'ELITE PSC',
      'ESPERANZA',
      'ESTUDIANTES DEL NORTE I',
      'FLORIDA',
      'FORMANDO TALENTOS',
      'GUABIRA',
      'INDEPENDENT',
      'JMP SOCCER',
      'LA GUARDIA',
      'MAQUINA CELESTE',
      'MAQUINITA',
      'NACIONAL COTOCA',
      'ORIENTE PETROLERO',
      'PASTA DE CAMPEONES',
      'PLANETA FC',
      'REAL SC',
      'ROYAL PARI',
      'SAN FELIPE',
      'SAN JORGE',
      'SAN MARTIN',
      'TAMAYA JIMENEZ',
      'UNION GODOY',
      'UNIVERSIDAD GRM',
      'DEP. INDEPENDIENTE',
      'POTRERO DE CAMPEONES',
      'ATLETICO HURACAN',
      '10 DE FEBRERO',
      '19 DE MARZO',
      'FERROVIARIO',
      'LOS ANDES',
    ];

    const clubsSub15: string[] = [
      'AGUIA BRASIL',
      'AMBORO',
      'BLOOMING',
      'CALLEJA',
      'DEPORTIVO AMERICA',
      'EL SEMILLERO',
      'ELITE PSC',
      'FLORIDA',
      'GALACTICOS',
      'INDEPENDENT',
      'INTERNACIONAL DE SC',
      'MAQUINA CELESTE',
      'MEGACENTER',
      'PLANETA FC',
      'REAL MONTERO',
      'SAN FELIPE',
      'SOLARES FC',
      'TORITO GARCIA',
      'VIRGINIA USC',
      'YOTAU',
    ];

    const clubsSub14: string[] = [
      'DEPORTIVO SANTA CRUZ',
      'MEGACENTER',
      'PLANETA FC',
      'RAYO 3000',
      'SAGUAPAC',
      'SAN FELIPE',
      'URBARI',
      'VIRGINIA USC',
    ];

    const clubsSub13: string[] = [
      'AMBORO',
      'BLOOMING',
      'CALLEJA',
      'CRISTO REY',
      'DEPORTIVO AMERICA',
      'EL SEMILLERO',
      'ELITE PSC',
      'FLORIDA',
      'INTERNACIONAL DE SC',
      'LA CANTERA',
      'MAQUINA CELESTE',
      'MEGACENTER',
      'NUEVA SANTA CRUZ FC',
      'PLANETA FC',
      'REAL MONTERO',
      'SAGUAPAC',
      'SAN FELIPE',
      'SEBASTIAN PAGADOR',
      'SOLARES FC',
      'URBARI',
      'VIRGINIA USC',
    ];

    const clubsSub12: string[] = [
      'BANCRUZ',
      'CALLEJA',
      'DEPORTIVO SANTA CRUZ',
      'EL SEMILLERO',
      'ELITE PSC',
      'ESTUDIANTES DEL NORTE I',
      'FLORIDA',
      'GALACTICOS',
      'MEGACENTER',
      'NUEVA SANTA CRUZ FC',
      'PLANETA FC',
      'RAYO 3000',
      'URBARI',
      'YOTAU',
    ];

    const clubsSub11: string[] = [
      'BLOOMING',
      'CALLEJA',
      'CRISTO REY',
      'DEPORTIVO AMERICA',
      'DON BOSCO PORTACHUELO',
      'EL SEMILLERO',
      'FLORIDA',
      'MEGACENTER',
      'NUEVA SC ACADEMIA FC',
      'PLANETA FC',
      'REAL CAMBA',
      'SAN FELIPE',
      'TORITO GARCIA',
      'URBARI',
      'VIRGINIA USC',
    ];

    const clubsSub10: string[] = [
      'BLOOMING',
      'CALLEJA',
      'DEPORTIVO AMERICA',
      'EL SEMILLERO',
      'ELITE PSC',
      'ESTUDIANTES DEL NORTE I',
      'FLORIDA',
      'INTERNACIONAL DE SC',
      'LA CANTERA',
      'MEGACENTER',
      'PLANETA FC',
      'SAGUAPAC',
      'VIRGINIA USC',
    ];

    const clubsSub09: string[] = [
      'BLOOMING',
      'CALLEJA',
      'CRISTO REY',
      'ELITE PSC',
      'FLORIDA',
      'MEGACENTER',
      'PLANETA FC',
      'VIRGINIA USC',
      'YOTAU',
    ];

    const clubsSub08: string[] = [
      'BLOOMING',
      'CALLEJA',
      'ELITE PSC',
      'FABRILES FC',
      'FLORIDA',
      'LEONES PFC',
      'MEGACENTER',
      'SEBASTIAN PAGADOR',
    ];

    const clubsSub07: string[] = [
      'CALLEJA',
      'FLORIDA',
      'GUARAYECO',
      'MEGACENTER',
      'TAHUICHI',
      'VIRGINIA USC',
    ];

    const clubsCategories = [
      { category: 'SUB19', clubs: clubsSub19 },
      { category: 'SUB17', clubs: clubsSub17 },
      { category: 'SUB15', clubs: clubsSub15 },
      { category: 'SUB14', clubs: clubsSub14 },
      { category: 'SUB13', clubs: clubsSub13 },
      { category: 'SUB12', clubs: clubsSub12 },
      { category: 'SUB11', clubs: clubsSub11 },
      { category: 'SUB10', clubs: clubsSub10 },
      { category: 'SUB09', clubs: clubsSub09 },
      { category: 'SUB08', clubs: clubsSub08 },
      { category: 'SUB07', clubs: clubsSub07 },
    ];

    const clubsCategoriesEntity: ClubCategoryEntity[] = [];

    for (const clubsCategory of clubsCategories) {
      const clubsCategoriesSaved = await this.addClubsToCategory(
        clubsCategory.clubs,
        clubsCategory.category,
      );
      clubsCategoriesEntity.push(...clubsCategoriesSaved);
    }

    return clubsCategoriesEntity;
  }
}
