import { BrandLogo } from "../assets/BrandLogo";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="text-center bg-[#D9D9D9] text-[#111010] py-6">
        NEW CUSTOMERS GET 15% OFF! USE CODE{" "}
        <span className="text-[#404F84]">WELCOME15</span>
      </div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto h-26">
        <nav></nav>
        <div className="flex justify-center items-center">
          <BrandLogo />
        </div>
        <div></div>
      </div>
    </header>
  );
};
