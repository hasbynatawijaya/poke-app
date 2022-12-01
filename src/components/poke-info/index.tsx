const PokeInfo = ({ children, title }) => {
  return (
    <div className="shadow-2xl w-full p-4 h-fit font-bold">
      <h3>{title}</h3>
      <div className="border border-1 border-gray-300 my-2" />
      {children}
    </div>
  );
};

export default PokeInfo;
