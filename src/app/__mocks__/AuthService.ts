/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthBody } from '../interfaces/auth';

export class AuthServiceMock {
  public themeActive: string = 'light';

  login(body: AuthBody) {}

  signUp(body: AuthBody) {}
}
