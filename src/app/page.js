import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import GithubActivity from "@/components/GithubActivity";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      
      <main className='max-w-11/12 mx-auto'>
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <GithubActivity />
        <Contact />
      </main>
     
    </>
  );
}

