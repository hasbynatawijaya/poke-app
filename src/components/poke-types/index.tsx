const PokeTypes: React.FC<PokeTypes> = ({ pokeTypes }) => {
  return (
    <div className="flex flex-wrap gap-2 p-6 content-start h-fit">
      {pokeTypes.map(({ type: { name } }) => (
        <div
          key={name}
          className="w-max px-2 py-1 bg-blue-600 text-white rounded-xl h-fit font-normal"
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default PokeTypes;
