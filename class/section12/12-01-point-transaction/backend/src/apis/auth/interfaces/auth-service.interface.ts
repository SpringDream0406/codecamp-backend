import { User } from 'src/apis/users/entities/user.entity';
import { IAuthUser, IContext } from 'src/commons/graphql/interfaces/context';

export interface IAuthServiceLogin {
  email: string;
  password: string;
  context: IContext;
}

export interface IAuthServiceGetAcessToken {
  user: User | IAuthUser['user'];
}

export interface IAuthServiceSetRefreshToken {
  user: User;
  context: IContext;
}

export interface IAuthServiceRestoreAccessToken {
  user: IAuthUser['user'];
}
