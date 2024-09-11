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
      <Navigation />
      <SubLinks />
      {/* <div className="container">{children}</div> */}
      <Footer />
    </main>
  );
}
