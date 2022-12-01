import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/axios/index";

const usePokeDetails = (pokeId: string) => {
  const { ...props } = useQuery(["pokeDetails"], async () => {
    const response = await axiosInstance.get<PokeDetails>(
      `/v2/pokemon/${pokeId}`
    );
    return response.data;
  });

  return {
    ...props,
  };
};

export default usePokeDetails;
