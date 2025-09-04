import { BrandLogo } from "../../assets/BrandLogo";
import { CartIcon } from "./assets/CartIcon";
import { SearchIcon } from "./assets/SearchIcon";
import { UserIcon } from "./assets/UserIcon";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="text-center bg-[#D9D9D9] text-[#111010] py-6">
        NEW CUSTOMERS GET 15% OFF! USE CODE{" "}
        <span className="text-[#404F84]">WELCOME15</span>
      </div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto h-26">
        <nav className="flex gap-4 justify-start items-center">
          <button className="button-rectangle selected">HOME</button>
          <button className="button-rectangle">ABOUT</button>
          <button className="button-rectangle">CONTACT</button>
        </nav>
        <div className="flex justify-center items-center">
          <BrandLogo />
        </div>
        <div className="flex gap-4 justify-end items-center">
          <button className="button-rounded">
            <CartIcon />
          </button>
          <button className="button-rounded">
            <UserIcon />
          </button>
          <button className="button-rounded">
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
