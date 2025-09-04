import { BrandLogo } from "../assets/BrandLogo";

export const Footer = () => (
  <div>
    <div className="gradient-separator" />
    <footer className="bg-[#D9D9D9] flex justify-center py-7 tracking-[0.07em]">
      <div className="max-w-7xl flex justify-center items-center gap-14">
        <div className="flex items-center gap-6">
          <BrandLogo />
          <h2 className="text-2xl font-semibold text-nowrap text-[#443B3B]">
            Brand Name
          </h2>
        </div>
        <p className="text-[#5F5959] text-[11px] leading-none font-[inter] font-regular">
          © 2024 <span className="font-bold">Brand Name</span> All rights
          reserved. Unauthorized use or copying of this brand is strictly
          prohibited. No part of this website may be reproduced, distributed, or
          transmitted in any form or by any means, including photocopying,
          recording, or other electronic or mechanical methods, without the
          prior written permission of{" "}
          <span className="font-bold">Brand Name</span>, except in the case of
          brief quotations embodied in critical reviews and certain other
          non-commercial uses permitted by copyright law.
        </p>
      </div>
    </footer>
  </div>
);
