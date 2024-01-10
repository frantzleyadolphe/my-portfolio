import Navbar from "./navbar";
import About from "./About";
import Banner from "./sections/banner";
import Skills from "./sections/skills";

export default function Home() {
  return (
    <div className="m-0 p-0 bg-white ">
      <Navbar />
      <Banner />
      <About />
      <Skills />
    </div>
  );
}
