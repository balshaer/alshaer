import { useMediaQuery } from '@react-hook/media-query';

export const useCustomMediaQuery = (query: string) => {
  return useMediaQuery(query);
};