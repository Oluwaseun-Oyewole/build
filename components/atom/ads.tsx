import { IoMdArrowForward } from "react-icons/io";
import { Button } from "../ui/button";

const Ads = () => {
  return (
    <div className="w-full bg-black py-4 text-white">
      <div className="container flex w-full items-center justify-between">
        <div className="text-xs md:text-base">
          <span className="text-xs text-warning-500 md:text-xl">Black</span>{" "}
          <span>Friday</span>
        </div>
        <div className="flex items-center gap-1 text-xs md:gap-3 md:text-base">
          <span>Up to</span>
          <span className="text-xs text-warning-500 md:text-4xl">59%</span>
          <span>OFF</span>
        </div>
        <div>
          <Button variant="ghost" className="text-sm text-black">
            SHOP NOW <IoMdArrowForward size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ads;
