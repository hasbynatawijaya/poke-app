declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

type Card = {
  imageURL?: string;
  title?: string;
  description?: string;
};

type Button = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

type PokeMoves = {
  pokeMoves: PokeDetails["moves"];
};

type PokeTypes = {
  pokeTypes: PokeDetails["types"];
};

type PokeCatch = {
  pokeDetails: PokeDetails;
  handleCatch: (value: boolean) => void;
};

type PokeSprite = {
  pokeSprites?: PokeDetails["sprites"];
};
