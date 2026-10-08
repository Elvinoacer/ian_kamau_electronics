import { Hero } from "@/components/portfolio/sections/hero";
import { Snapshot } from "@/components/portfolio/sections/snapshot";
import { ToolsTicker } from "@/components/portfolio/sections/tools-ticker";
import { Work } from "@/components/portfolio/sections/work";
import { FinalYearProject } from "@/components/portfolio/sections/fyp";
import { Capabilities } from "@/components/portfolio/sections/capabilities";
import { Experience } from "@/components/portfolio/sections/experience";
import { LabGallery } from "@/components/portfolio/sections/lab-gallery";
import { Trajectory } from "@/components/portfolio/sections/trajectory";
import { Philosophy } from "@/components/portfolio/sections/philosophy";
import { Contact } from "@/components/portfolio/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Snapshot />
      <ToolsTicker />
      <Work />
      <FinalYearProject />
      <Capabilities />
      <Experience />
      <LabGallery />
      <Trajectory />
      <Philosophy />
      <Contact />
    </>
  );
}
