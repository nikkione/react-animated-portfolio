import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
const App = () => {
	return (
		<div>
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="Services">
				<Parallax type="services" />
			</section>
			<section>HERO</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<section id="Contact">HERO</section>
			<section id="About">HERO</section>
			{/* <Test />
			<Test /> */}
		</div>
	);
};

export default App;
