import { Header } from "@/components/header";
import {
  Contact,
  Education,
  Experience,
  Hero,
  Portfolio,
  Profile,
  Results,
  Skills,
} from "@/components/site";
import { jsonLd } from "@/data/resume";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="content">
        <Hero />
        <Profile />
        <Portfolio />
        <Results />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
