import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly clientAuthService: ClientProxy,

    @Inject('RESOURCE_SERVICE')
    private readonly clientResourceService: ClientProxy,
  ) {}

  @Post('/auth/login')
  login() {
    // auth-service로 트래픽 넘겨줌
    return this.clientAuthService.send(
      { qqq: '이름' }, // MessagePattern 연결하는 용도
      { email: 'a@a.com', password: '1234' }, // 넘기는 데이터
    );
  }

  @Get('/boards')
  fetchBoards() {
    // resource-service로 트래픽 넘겨줌
    return this.clientResourceService.send({ cmd: 'fetchBoards' }, {}); // 실무에서 MessagePattern 연결하는 방법, 보낼 데이터 없어서 뒤에 없음
  }
}
