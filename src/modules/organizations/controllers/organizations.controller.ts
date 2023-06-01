import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrganizationsService } from '@organizations/services/organizations.service';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { OrganizationRegisterDto } from '@organizations/models/dto/organization-register.dto';
import { OrganizationAddClubsDto } from '@organizations/models/dto/organization-add-clubs.dto';

@UseGuards(JwtAuthGuard)
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  async findAll() {
    return await this.organizationsService.findAll();
  }

  @Post()
  async create(@Body() organizationRegisterDto: OrganizationRegisterDto) {
    return await this.organizationsService.create(organizationRegisterDto);
  }

  @Get('seed')
  async seed() {
    return await this.organizationsService.seed();
  }

  @Post('update-clubs')
  async updateClubs(@Body() organizationAddClubsDto: OrganizationAddClubsDto) {
    return await this.organizationsService.updateClubs(
      organizationAddClubsDto.organizationId,
      organizationAddClubsDto.clubsIds,
    );
  }
}
