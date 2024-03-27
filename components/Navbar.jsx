import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-r rounded-lg from-purple-500 to-red-500 text-white flex items-center justify-between py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/svg/menu.svg"
            className="lg:hidden w-5 h-5 text-white"
            alt=""
            width={200}
            height={40}
          />
          <Link href="/">
            <Image
              src="/lws-logo-black.svg"
              className="h-10"
              alt=""
              width={200}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/svg/avatar.svg"
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
          width={200}
          height={40}
        />
        <Image
          src="/svg/shopping-Cart.svg"
          className="block w-5 h-5"
          alt="shopping cart icon"
          width={200}
          height={40}
        />
      </div>
    </nav>
  );
};

export default Navbar;
