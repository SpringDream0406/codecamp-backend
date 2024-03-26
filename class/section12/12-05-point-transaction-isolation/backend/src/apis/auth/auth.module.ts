import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersMoudle } from '../users/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UsersMoudle, //
  ],

  providers: [
    JwtAccessStrategy,
    JwtRefreshStrategy,
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModle {}
