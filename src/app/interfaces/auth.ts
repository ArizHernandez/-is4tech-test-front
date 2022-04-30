export interface LoginResp {
  message: string;
  data: {
    user: string;
    token: string;
  };
}

export interface RegisterResp {
  message: string;
  data: {
    user: string;
  };
}

export interface AuthBody {
  user: string;
  password: string;
}
