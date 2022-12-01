import { useInfiniteQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/axios/index";

import queryToObject from "@/helpers/queryToObject";

const usePokeList = () => {
  const { ...props } = useInfiniteQuery(
    ["pokeList"],
    async ({ pageParam = 0 }) => {
      const response = await axiosInstance.get<PokeList>(
        `/v2/pokemon/?offset=${pageParam}&limit=20`
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage) =>
        queryToObject(lastPage.next || "")?.offset ?? undefined,
    }
  );

  return {
    ...props,
  };
};

export default usePokeList;
