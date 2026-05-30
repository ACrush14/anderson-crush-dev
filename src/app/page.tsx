import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EventsGallery from "@/components/EventsGallery";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <EventsGallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
