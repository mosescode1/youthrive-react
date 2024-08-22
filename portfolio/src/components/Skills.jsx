import HeaderText from './HeaderText';
import HtmlImg from '../assets/html3.png';
import CssImg from '../assets/css3.png';
import SassImg from '../assets/sass.png';
import JsImg from '../assets/js.png';
import ReactImg from '../assets/react.png';
import BootStrapImg from '../assets/bootstrap.png';
import GitImg from '../assets/Git-Icon.png';
import FigmaImg from '../assets/figma.png';

function Skills() {
	return (
		<div className='mx-auto py-20  lg:w-3/5'>
			<div className='lg:w-52 lg:mx-auto lg:my-0'>
				<HeaderText text={'Skills'} />
			</div>
			<h2 className='text-5xl font-black my-14 '>USING NOW:</h2>
			<div className='grid gap-36 lg:grid-cols-4'>
				<Skill />
			</div>
		</div>
	);
}

function Skill() {
	return (
		<>
			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={HtmlImg} alt='Skill logo' />
				<p className='font-black'>HTML</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={CssImg} alt='Skill logo' />
				<p className='font-black'>CSS</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={SassImg} alt='Skill logo' />
				<p className='font-black'>SASS</p>
			</div>

			<div className='mx-auto my-0  text-center  hidden lg:block'>
				<img src={JsImg} alt='Skill logo' />
				<p className='font-black'>JAVASCRIPT</p>
			</div>

			<div className='mx-auto my-0  text-center  hidden lg:block'>
				<img src={ReactImg} alt='Skill logo' />
				<p className='font-black'>REACT</p>
			</div>

			<div className='mx-auto my-0  text-center  hidden lg:block'>
				<img className='mb-3' src={BootStrapImg} alt='Skill logo' />
				<p className='font-black'>BOOTSTRAP</p>
			</div>

			<div className='mx-auto my-0  text-center hidden lg:block'>
				<img className='mb-3' src={GitImg} alt='Skill logo' />
				<p className='font-black '>GIT</p>
			</div>

			<div className='mx-auto my-0  text-center  hidden lg:block'>
				<img className='mb-3' src={FigmaImg} alt='Skill logo' />
				<p className='font-black'>FIGMA</p>
			</div>
		</>
	);
}

export default Skills;
