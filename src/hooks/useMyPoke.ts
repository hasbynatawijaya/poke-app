import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import delay from "@/helpers/delay";

const useMyPoke = () => {
  const navigate = useNavigate();

  const [myPoke, setMyPoke] = useState<PokeDetails[]>([]);
  const [isLoadingCatch, setIsLoadingCatch] = useState(false);
  const [catchPokeStatus, setCatchPokeStatus] = useState<CatchPoke>({
    status: "battle",
    message: "A WILD POKEMON HAS APPEARED!!!!",
  });

  const myPokeStorage = localStorage.getItem("myPoke");
  const parsedMyPokeStorage: PokeDetails[] = myPokeStorage
    ? JSON.parse(myPokeStorage)
    : [];

  useEffect(() => {
    setMyPoke(parsedMyPokeStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("myPoke", JSON.stringify(myPoke));
  }, [myPoke]);

  const handleCheckMyPoke = (pokeId: number) => {
    return Boolean(myPoke.find((poke) => poke.id === pokeId));
  };

  const handleCatchPoke = async () => {
    setIsLoadingCatch(true);
    await delay(5000);
    setIsLoadingCatch(false);

    if (Math.random() < 0.5) {
      setCatchPokeStatus({
        status: "success",
        message:
          "Gratz you got the pokemon!!! dont forget to give him a nickname & check your catched pokemon by clicking the pokeball on the right top of your screen",
      });
    } else {
      setCatchPokeStatus({
        status: "failed",
        message:
          "Failed to catch, pokemon is too strong you can try catch again or just RUN!!!",
      });
    }
  };

  const handleSavePoke = async (newPoke: PokeDetails) => {
    setMyPoke((prev) => [...prev, newPoke]);
    await delay(2000);
    navigate("/");
  };

  const handleReleasePoke = async (pokeId: number) => {
    setMyPoke((prev) => prev.filter((poke) => poke.id !== pokeId));
  };

  return {
    myPoke,
    catchPokeStatus,
    isLoadingCatch,
    handleCatchPoke,
    handleCheckMyPoke,
    handleSavePoke,
    handleReleasePoke,
  };
};

export default useMyPoke;
