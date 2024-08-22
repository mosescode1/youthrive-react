import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Banner from './components/Banner';
import Main from './components/Main';
import Portfolio from './components/Porfolio';
import Filter from './components/Filter';
import Project from './components/Project';
import Contact from './components/Contact';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
	return (
		// header
		<div className=''>
			<Header />
			<HeroBanner />
			<Banner />
			<Main />
			<Portfolio />
			<Filter />
			<Project />
			<Contact />
			<Form />
			<Footer />
		</div>
	);
}

export default App;
