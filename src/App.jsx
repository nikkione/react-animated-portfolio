import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
const App = () => {
	return (
		<div>
			<section>
				<Navbar />
			</section>
			<section>Parallax</section>
			<section>HERO</section>
			<section>HERO</section>
			<section>HERO</section>
			<section>HERO</section>
			{/* <Test />
			<Test /> */}
		</div>
	);
};

export default App;
