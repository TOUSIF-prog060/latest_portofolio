import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Statement } from "@/components/statement";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Statement />
      <Services />
      <Stack />
      <About />
      <Contact />
    </>
  );
}
