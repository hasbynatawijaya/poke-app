const Button: React.FC<Button> = ({ onClick, className = "", children }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer  px-4 py-2 rounded-xl w-full text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
