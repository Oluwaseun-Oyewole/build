// app/components/MyCarousel.tsx
"use client";
import SliderComponent from "@/components/atom/carouse.atom";
import GameImage from "@/public/assets/images/svg/slider.svg";
import DesktopImage from "@/public/assets/images/svg/slider2.svg";
import Slider from "react-slick";

export default function ItemsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <SliderComponent
          title="THE BEST PLACE TO PLAY"
          heading="Xbox Consoles"
          description="Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD."
          buttonText="Shop now"
          imagePath={GameImage}
          amount={2500}
        />
        <SliderComponent
          title="THE BEST PLACE TO BUY"
          heading="TV's"
          description="Save up to 40% on tv. Get 3 months of PC Game Pass for $2 USD."
          buttonText="Shop now"
          imagePath={DesktopImage}
          amount={800}
        />
        <SliderComponent
          title="THE ONLY PLACE TO PLAY"
          heading="PS5 Consoles"
          description="Save up to 30% on ps5 games. Get 3 months of PC Game Pass for $2 USD."
          buttonText="Get game"
          imagePath={GameImage}
          amount={1200}
        />
      </Slider>
    </div>
  );
}
