import { Global, Module } from '@nestjs/common';
import { UsersController } from '@users/controllers/users.controller';
import { UsersService } from '@users/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@users/models/entities/user.entity';
import { ClubsModule } from '@clubs/clubs.module';
import { UserRepository } from '@users/models/repositories/user.repository';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), ClubsModule],
  controllers: [UsersController],
  providers: [UserRepository, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
