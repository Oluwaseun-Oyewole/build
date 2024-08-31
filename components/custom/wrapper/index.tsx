import { type ReactNode } from "react";
import Footer from "../footer";
import Navigation from "../nav";

export default function Wrapper({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <main>
      <Navigation />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}
