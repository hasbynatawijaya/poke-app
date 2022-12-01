const PokeSprites: React.FC<PokeSprite> = ({ pokeSprites = {} }) => {
  return (
    <div className="flex flex-wrap gap-2 p-6 content-start h-fit">
      {Object.keys(pokeSprites).map(
        (key, i) =>
          pokeSprites[key] !== null &&
          typeof pokeSprites[key] === "string" && (
            <img key={i} src={pokeSprites[key]} alt={key} />
          )
      )}
    </div>
  );
};

export default PokeSprites;
