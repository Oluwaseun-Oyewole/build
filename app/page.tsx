import HeroRightSession from "@/components/atom/flex.display";
import ShopifyServices from "@/components/atom/services";
import ItemsCarousel from "@/components/custom/carousel";
import Deals from "@/components/custom/deals";
import Wrapper from "@/components/custom/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="container grid grid-cols-[100%] items-center justify-between gap-5 py-2 md:container md:py-5 xl:grid-flow-row xl:grid-cols-[65%_33%]">
        <ItemsCarousel />
        <HeroRightSession />
      </div>
      <ShopifyServices />
      <Deals />
    </Wrapper>
  );
}
