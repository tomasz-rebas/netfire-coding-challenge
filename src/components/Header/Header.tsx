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
          <button className="border-[#827D7D] border-solid border-1 bg-[#E5E5DF] py-2 px-6 rounded-lg text-center">
            HOME
          </button>
          <button className="border-[#827D7D] border-solid border-1 bg-[#D9D9D9] py-2 px-6 rounded-lg text-center">
            ABOUT
          </button>
          <button className="border-[#827D7D] border-solid border-1 bg-[#D9D9D9] py-2 px-6 rounded-lg text-center">
            CONTACT
          </button>
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
