import icon from "@/public/assets/images/png/Icon.png";
import cart from "@/public/assets/images/svg/cart.svg";
import love from "@/public/assets/images/svg/love.svg";
import user from "@/public/assets/images/svg/user.svg";
import Image from "next/image";
import Link from "next/link";
import Search from "../search";

const Navigation = () => {
  return (
    <header className="flex h-[12vh] items-center justify-between bg-secondary-700 text-white">
      <nav className="container sticky top-0 grid w-full grid-flow-col grid-cols-[20%_60%_20%] items-center">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image alt="logo" src={icon} className="h-[30px] w-[30px]" />
            <h1>Shopify</h1>
          </div>
        </Link>
        <Search />
        <div className="flex items-center justify-end gap-4">
          <Image alt="cart" src={cart} className="h-[30px] w-[30px]" />
          <Image alt="love" src={love} className="h-[30px] w-[30px]" />
          <Image alt="user" src={user} className="h-[30px] w-[30px]" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
