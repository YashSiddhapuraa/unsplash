import { LogoSVG } from "../../Assets/Icons/Logo";
import { MenuSVG } from "../../Assets/Icons/MenuSVG";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <div className="w-full flex items-center gap-2 p-4 sticky top-0 z-50 bg-white">
      <LogoSVG />
      <SearchBar />
      <MenuSVG />
    </div>
  );
};

export default Header;
