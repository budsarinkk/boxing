export interface UserCredentials {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
  lastLogin: Date;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  JUDGE = 'JUDGE',
  REFEREE = 'REFEREE',
}
