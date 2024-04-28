import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// 예시 - 이런식으로 Strategy 가져와서 바꿔치기만 하면 된다.
// import { KakaoStrategy } from 'passport-kakao'
// import { NaverStrategy } from 'passport-naver'
// import { GooleStrategy } from 'passport-google'

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        console.log(req);
        const cookie = req.headers.cookie; // refreshToken=dfjafahsjkfa
        const refreshToekn = cookie.replace('refreshToken=', '');
        return refreshToekn;
      },
      secretOrKey: '나의리프레시비밀번호',
    });
  }

  validate(payload) {
    console.log(payload); // { sub: asadsfasf(유저ID)}

    return {
      id: payload.sub,
    };
  }
}
