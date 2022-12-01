import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/button";

import parseURL from "@/helpers/parseURL";

import { POKE_IMAGE_BASE_URL } from "@/constants/index";

const Card: React.FC<Card> = ({ imageURL, title }) => {
  const navigate = useNavigate();

  const cardId = useMemo(() => {
    return parseURL(imageURL || "").pathname.split("/")[4] || "";
  }, [imageURL]);

  const handleDetails = () => {
    return navigate(`/poke/${cardId}`);
  };

  return (
    <div className="h-80 flex flex-col items-center justify-center rounded-3xl p-5 shadow-lg">
      <div className="z-20 w-full">
        <img
          src={`${POKE_IMAGE_BASE_URL}/${cardId}.png`}
          alt={title}
          className="m-auto"
        />
      </div>
      <span className="block font-semibold text-lg capitalize">{title}</span>
      <div className="mt-8 w-full">
        <Button
          className="bg-red-600 hover:bg-red-500 text-white font-bold"
          onClick={handleDetails}
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default Card;
