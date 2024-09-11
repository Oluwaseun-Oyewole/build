import paymentImage from "@/public/assets/images/svg/CreditCard.svg";
import supportImage from "@/public/assets/images/svg/headphone.svg";
import deliveryImage from "@/public/assets/images/svg/package.svg";
import trophyImage from "@/public/assets/images/svg/Trophy.svg";

export const services = [
  {
    id: 0,
    title: "faster delivery",
    description: "Delivery in 24/hrs",
    imagePath: deliveryImage,
  },
  {
    id: 1,
    title: "24 hours return",
    description: "100% money back guarantee",
    imagePath: trophyImage,
  },
  {
    id: 2,
    title: "secure payment",
    description: "Your money is secured",
    imagePath: paymentImage,
  },
  {
    id: 3,
    title: "support 24/7",
    description: "Live contact messages",
    imagePath: supportImage,
  },
];
