import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Homepage">Parallax</section>
      <section id="Services">HERO</section>
      <section id="Portfolio">HERO</section>
      <section id="Contact">HERO</section>
      <section id="About">HERO</section>
      {/* <Test />
			<Test /> */}
    </div>
  );
};

export default App;
