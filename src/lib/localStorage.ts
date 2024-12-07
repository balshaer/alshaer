const THEME_KEY = "pageMode";

export const savePageMode = (mode: string): void => {
  localStorage.setItem(THEME_KEY, mode);
};

export const getPageMode = (): string | null => {
  return localStorage.getItem(THEME_KEY);
};
