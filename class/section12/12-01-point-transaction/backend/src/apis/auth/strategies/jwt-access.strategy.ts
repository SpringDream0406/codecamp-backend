import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// 예시 - 이런식으로 Strategy 가져와서 바꿔치기만 하면 된다.
// import { KakaoStrategy } from 'passport-kakao'
// import { NaverStrategy } from 'passport-naver'
// import { GooleStrategy } from 'passport-google'

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      //   jwtFromRequest: (req) => {
      //     const temp = req.headers.Authorization; // Bearer asdfajsdf
      //     const aceessToken = temp.toLowercase().replace('bearer ', '');
      //     return aceessToken;
      //   },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '나의비밀번호',
    });
  }

  validate(payload) {
    console.log(payload); // { sub: asadsfasf(유저ID)}

    return {
      id: payload.sub,
    };
  }
}
