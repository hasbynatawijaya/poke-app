import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import usePokeDetails from "@/hooks/usePokeDetails";
import useMyPoke from "@/hooks/useMyPoke";

import Loader from "@/components/common/loader";
import Button from "@/components/common/button";

import { POKE_IMAGE_BASE_URL } from "@/constants/index";

import PokeMoves from "@/components/poke-moves";
import PokeInfo from "@/components/poke-info";
import PokeTypes from "@/components/poke-types";
import PokeCatch from "@/components/poke-catch";
import PokeSprites from "@/components/poke-sprites";

const PokeDetailsPage = () => {
  const { pokeId } = useParams();
  const { data, status } = usePokeDetails(pokeId || "");
  const { myPoke, handleReleasePoke } = useMyPoke();

  const [isCatchMode, setIsCatchMode] = useState(false);

  const isPokeCatched = useMemo(() => {
    return Boolean(myPoke.find((poke) => poke.id === data?.id));
  }, [myPoke, data]);

  const handleCatch = (value: boolean) => {
    setIsCatchMode(value);
  };

  if (status === "loading") {
    return (
      <div className="w-full relative h-full">
        <Loader />
      </div>
    );
  }

  if (isCatchMode && data) {
    return <PokeCatch pokeDetails={data} handleCatch={handleCatch} />;
  }

  return (
    <>
      <div className="p-8 gap-6 flex flex-col md:flex-row rounded-lg shadow-2xl transition-opacity ease-in duration-1000 opacity-100">
        <div className="shadow-lg p-5 bg-gray-200 rounded-lg h-fit">
          <h3 className="capitalize bg-blue-500 rounded-lg w-max px-3 py-1 text-white">
            {data?.name}
          </h3>
          <img
            src={`${POKE_IMAGE_BASE_URL}/${pokeId}.png`}
            alt={data?.name}
            height="100%"
            width="100%"
            className="w-52 m-auto"
          />
          <div className="text-sm text-gray-600 font-bold mb-4">
            <span>Weight: {data?.weight}lbs</span>
            {"   /   "}
            <span>Height: {data?.height}ft</span>
          </div>
          {isPokeCatched ? (
            <Button
              onClick={() => handleReleasePoke(data!.id)}
              className="bg-red-400 text-white font-semibold"
            >
              Release
            </Button>
          ) : (
            <Button
              onClick={() => handleCatch(true)}
              className="bg-orange-400 text-white font-semibold"
            >
              Catch
            </Button>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <PokeInfo title="Top 10 Pokemon Moves">
            <PokeMoves pokeMoves={data?.moves || []} />
          </PokeInfo>
          <PokeInfo title="Pokemon Types">
            <PokeTypes pokeTypes={data?.types || []} />
          </PokeInfo>
          {data?.sprites && (
            <PokeInfo title="Pokemon Other Sides">
              <PokeSprites pokeSprites={data?.sprites} />
            </PokeInfo>
          )}
        </div>
      </div>
    </>
  );
};

export default PokeDetailsPage;
