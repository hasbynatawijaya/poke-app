import { useNavigate } from "react-router-dom";

import logo from "@/assets/pokemon-logo.png";
import pokeBall from "@/assets/poke-ball.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-11">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="h-32" />
      </div>
      <div className="cursor-pointer" onClick={() => navigate("/poke/catched")}>
        <img src={pokeBall} alt="logo" className="h-12 m-auto" />
      </div>
    </div>
  );
};

export default Header;
