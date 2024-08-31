import arrow from "@/public/assets/images/svg/ArrowsCounterClockwise.svg";
import headphone from "@/public/assets/images/svg/headphone.svg";
import help from "@/public/assets/images/svg/help.svg";
import map from "@/public/assets/images/svg/map.svg";
import { Routes } from "./routes";

export const subLinks = [
  { title: "Track Order", id: 1, image: map, route: Routes.order },
  { title: "Compare", id: 2, image: arrow, route: Routes.compare },
  { title: "Customer support", id: 3, image: headphone, route: Routes.support },
  { title: "Need Help", id: 4, image: help, route: Routes.help },
];

export const subCategories = [
  { title: "Computer & Laptop", id: 0, linkTitle: "Computer&Laptop" },
  { title: "Computer Accessories", id: 1, linkTitle: "ComputerAccessories" },
  {
    title: "SmartPhone",
    id: 2,
    image: headphone,
    linkTitle: "phone",
    subArray: [
      { id: 0, title: "All" },
      { id: 1, title: "Iphone" },
      { id: 2, title: "Samsung" },
      { id: 3, title: "Xiaomi" },
      { id: 4, title: "Oppo" },
      { id: 5, title: "Vivo" },
      { id: 6, title: "Huawei" },
      { id: 7, title: "Infinix" },
      { id: 8, title: "Tecno" },
    ],
  },
  { title: "Headphone", id: 3, image: help, linkTitle: "Headphone" },
  {
    title: "Mobile Accessories",
    id: 4,
    image: help,
    linkTitle: "Mobile&Accessories",
  },
  { title: "Gaming Console", id: 5, image: help, linkTitle: "Gaming&Console" },
  { title: "Camera Photo", id: 6, image: help, linkTitle: "Camera&Photo" },
  {
    title: "TV & Home Appliances",
    id: 7,
    image: help,
    linkTitle: "TV&HomeAppliances",
  },
  {
    title: "Watch & Accessories",
    id: 8,
    image: help,
    linkTitle: "Watch&Accessories",
  },
  {
    title: "GPS & Navigation",
    id: 9,
    image: help,
    linkTitle: "GPS&Navigation",
  },
];

export const PhonesTitle = {
  phone: "All Phones",
  All: "All Featured Phones",
  Iphone: "Featured IPhone Phones",
  samsung: "Featured Samsung Phones",
  Xiaomi: "Featured Xiaomi Phones",
  Oppo: "Featured Oppo Phones",
};
