export const tokenKey = 'rh.token';

export function saveToken(token: string | undefined): void {
  token
    ? sessionStorage.setItem(tokenKey, token)
    : sessionStorage.removeItem(tokenKey);
}
