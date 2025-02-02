import About from "../../components/About";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { ScrollProgress } from "../../components/scroll-progress";
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="">
        {/* <h1 className="p-10 font-bold text-2xl">
          Hello, world! Lets build a cool porfolio!
        </h1> */}

        {/* header */}
        <Header />
        {/* hero */}
        <Hero />
        {/* about */}
        <About />
        {/* experience */}
        {/* skills */}
        {/* projects */}
        {/* contact me */}
        <Footer />
      </div>
    </>
  );
}
