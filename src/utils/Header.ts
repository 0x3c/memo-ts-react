interface HeaderInterface {
  Authorization?: string | null;
}
export const headers: HeaderInterface = {
  Authorization: localStorage.getItem("token")
};
export const setAuth = (token: string): void => {
  localStorage.setItem("token", token);
  headers.Authorization = token;
};
