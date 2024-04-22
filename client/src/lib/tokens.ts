export const tokenKey = 'rh.token';

export function saveToken(token: string | undefined): void {
  token
    ? sessionStorage.setItem(tokenKey, token)
    : sessionStorage.removeItem(tokenKey);
}

export function readToken(): string {
  const token = sessionStorage.getItem(tokenKey);
  if (!token) throw new Error('No token found');
  return token;
}
