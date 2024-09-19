import Ads from "@/components/atom/ads";
import PreNavigation from "@/components/atom/pre-nav";
import { type ReactNode } from "react";
import Footer from "../footer";
import Navigation from "../nav";
import SubLinks from "../subLinks";

export default function Wrapper({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <main>
      <div className="sticky left-0 top-0 z-10">
        <Ads />
        <PreNavigation />
        <Navigation />
        <SubLinks />
      </div>
      {/* <SubLinks /> */}
      <div>{children}</div>
      <Footer />
    </main>
  );
}
