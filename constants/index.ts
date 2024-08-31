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
