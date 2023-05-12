import { Global, Module } from '@nestjs/common';
import { UsersController } from '@users/controllers/users.controller';
import { UsersService } from '@users/services/users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "@users/models/entities/user.entity";
import { ClubsModule } from "@clubs/clubs.module";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
        ]),
        ClubsModule,
    ],
    controllers: [ UsersController ],
    providers: [ UsersService ],
    exports: [ UsersService ],
})
export class UsersModule {
}
