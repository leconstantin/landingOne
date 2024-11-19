import Feautures from "@/sections/Features";
import Hero from "@/sections/Hero";
import Integration from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Feautures />
      <Integration />
    </>
  );
}
