import Slider from "react-slick";

import useMyPoke from "@/hooks/useMyPoke";

import Button from "@/components/common/button";

import { POKE_IMAGE_BASE_URL } from "@/constants/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MyPoke = () => {
  const { myPoke, handleReleasePoke } = useMyPoke();

  if (!myPoke.length) {
    return (
      <div className="m-auto text-center max-w-sm font-semibold">
        <h1 className="text-5xl mb-5">HI IT SEEMS YOU HAVENT CATCH ANY POKEMON?</h1>
        <h1 className="text-5xl">DON'T WORRY PRACTICE MAKES PERFECT</h1>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-xs">
      <Slider {...settings}>
        {myPoke.map((poke) => (
          <div className="text-center">
            <h1 className="font-bold uppercase text-5xl tracking-widest">
              {poke.name}
            </h1>
            {poke.nickName && (
              <div className="mt-2 bg-blue-600 w-fit m-auto py-1 px-3 rounded-2xl text-white font-semibold">
                {poke.nickName}
              </div>
            )}
            <img
              src={`${POKE_IMAGE_BASE_URL}/${poke.id}.png`}
              alt={poke.name}
              className="w-full"
            />
            <Button
              onClick={() => handleReleasePoke(poke.id)}
              className="bg-red-400 text-white font-semibold"
            >
              Release
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyPoke;
