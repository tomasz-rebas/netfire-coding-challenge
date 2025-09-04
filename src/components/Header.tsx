import { BrandLogo } from "../assets/BrandLogo";

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
        <div></div>
      </div>
    </header>
  );
};
