export const tokenKey = 'rh.token';
export const userKey = 'rh.user';
import type { User } from '../Components/UserContext';

export function saveToken(token: string | undefined): void {
  token
    ? sessionStorage.setItem(tokenKey, token)
    : sessionStorage.removeItem(tokenKey);
}

export function saveUser(user: User | undefined): void {
  user
    ? sessionStorage.setItem(userKey, JSON.stringify(user))
    : sessionStorage.removeItem(userKey);
}

export function readToken(): string {
  const token = sessionStorage.getItem(tokenKey);
  if (!token) throw new Error('No token found');
  return token;
}

export function readUser(): User | undefined {
  const userJSON = sessionStorage.getItem(userKey);
  if (!userJSON) return;
  const user = JSON.parse(userJSON);
  return user;
}
