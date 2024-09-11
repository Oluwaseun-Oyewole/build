import HeroRightSession from "@/components/atom/flex.display";
import ShopifyServices from "@/components/atom/services";
import ItemsCarousel from "@/components/custom/carousel";
import Wrapper from "@/components/custom/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="grid grid-flow-row grid-cols-[65%_33%] items-center justify-between gap-5 py-3">
        <ItemsCarousel />
        <HeroRightSession />
      </div>
      <ShopifyServices />
    </Wrapper>
  );
}
