import {
	Navbar,
	MainContent,
	Skills,
	About,
	Projects,
	Footer,
} from "./components";

const Home = () => {
	return (
		<div>
			<Navbar />
			<MainContent />
			<Skills />
			<About />
			<Projects />
			<Footer />
		</div>
	);
};

export default Home;
