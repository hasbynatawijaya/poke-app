import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useMyPoke from "@/hooks/useMyPoke";

import Button from "@/components/common/button";
import Input from "@/components/common/input";

import { POKE_IMAGE_BASE_URL } from "@/constants/index";

import trainerBattle from "@/assets/poke-trainer-battle.png";
import pokeball from "@/assets/poke-ball.png";

const PokeCatch: React.FC<PokeCatch> = ({ pokeDetails, handleCatch }) => {
  const navigate = useNavigate();

  const { handleCatchPoke, handleSavePoke, catchPokeStatus, isLoadingCatch } =
    useMyPoke();

  const [pokeNickName, setPokeNickName] = useState("");

  return (
    <>
      <div className="relative h-52 max-w-lg m-auto bg-white bg-opacity-30">
        <div className="absolute right-8 top-8">
          <img
            src={
              isLoadingCatch
                ? pokeball
                : `${POKE_IMAGE_BASE_URL}/${pokeDetails.id}.png`
            }
            alt={pokeDetails.name}
            className={isLoadingCatch ? "animate-bounce h-8" : ""}
          />
        </div>
        <div className="absolute bottom-0">
          <img src={trainerBattle} alt="trainer-battle" className="h-36" />
        </div>
      </div>
      <div className="p-4 border-4 border-solid border-gray-600 bg-white max-w-lg m-auto">
        <span>{catchPokeStatus.message}</span>
        <div
          className={`flex mt-4 gap-4 ${
            catchPokeStatus.status === "success" ? "flex-col" : ""
          }`}
        >
          {catchPokeStatus.status === "success" ? (
            <>
              <Input
                value={pokeNickName}
                placeholder="Type nickname here..."
                onChange={(e) => setPokeNickName(e.target.value)}
              />
              <Button
                className="border-4 border-solid border-gray-600"
                onClick={() =>
                  handleSavePoke({ ...pokeDetails, nickName: pokeNickName })
                }
              >
                SAVE
              </Button>
            </>
          ) : (
            <>
              <Button
                className="border-4 border-solid border-gray-600"
                onClick={handleCatchPoke}
              >
                CATCH
              </Button>
              <Button
                className="border-4 border-solid border-gray-600"
                onClick={() => handleCatch(false)}
              >
                RUN!!
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PokeCatch;
