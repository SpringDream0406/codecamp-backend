import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersMoudle } from '../users/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}),
    UsersMoudle, //
  ],

  providers: [
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModle {}
