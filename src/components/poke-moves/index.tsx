const PokeMoves: React.FC<PokeMoves> = ({ pokeMoves }) => {
  return (
    <div className="flex flex-wrap gap-2 p-6 content-start h-fit">
      {pokeMoves?.slice(0, 10).map(({ move: { name } }) => (
        <div
          key={name}
          className="w-max px-2 py-1 bg-red-600 text-white rounded-xl h-fit font-normal"
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default PokeMoves;
