import Hero from "../sections/home/Hero";
import CoreServices from "../sections/home/CoreServices";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import Stats from "../sections/home/Stats";
import HomePartnersSection from "../sections/home/HomePartnersSection";

import ScrollSection from "../components/motion/ScrollFoldSection";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Home() {
  const dir = useScrollDirection({ threshold: 10 });

  return (
    <>
      <section className="snap min-h-[100svh]">
        <Hero />
      </section>

      <section id="services" className="snap min-h-[100svh] flex items-center">
        <div className="w-full">
          <ScrollSection>
            <CoreServices scrollDir={dir} />
          </ScrollSection>
        </div>
      </section>

      <section id="projects" className="snap min-h-[100svh] flex items-center">
        <div className="w-full">
          <ScrollSection>
            <FeaturedProjects scrollDir={dir} />
          </ScrollSection>
        </div>
      </section>

      <section id="stats" className="snap min-h-[100svh] flex items-center">
        <div className="w-full">
          <ScrollSection>
            <Stats scrollDir={dir} />
          </ScrollSection>
        </div>
      </section>

      <section id="HomePartnersSection" className="snap min-h-[100svh] flex items-center">
        <div className="w-full">
          <ScrollSection>
            <HomePartnersSection scrollDir={dir} />
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
