import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { MoreWork } from "@/components/sections/more-work";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  ...(portfolio.personal.siteUrl
    ? { alternates: { canonical: portfolio.personal.siteUrl } }
    : {}),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <About />
      <Experience />
      <Skills />
      <MoreWork />
      <Contact />
    </>
  );
}
