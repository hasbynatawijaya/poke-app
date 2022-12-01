import React from "react";

const SearchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  value,
  className = "",
  ...inputProps
}) => {
  return (
    <div className={`md:w-auto relative w-full ${className}`}>
      <div className="relative md:w-auto w-full rounded-[4px] border-[#aaaaaa] border-[1px] h-[39px] p-[1px] hover:border-[#000000]">
        <input
          className="w-full p-0 m-0 bg-transparent font-light outline-none leading-[39px] px-[5px]"
          placeholder={placeholder}
          value={value}
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default SearchInput;
