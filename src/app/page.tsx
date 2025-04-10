import About from "../../components/About";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { ScrollProgress } from "../../components/scroll-progress";
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      {/* experience */}
      {/* skills */}
      {/* projects */}
      {/* contact me */}
      <Footer />
    </>
  );
}
