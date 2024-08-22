import HeaderText from './HeaderText';
import HtmlImg from '../assets/html3.png';
import CssImg from '../assets/css3.png';
import SassImg from '../assets/sass.png';

function Skills() {
	return (
		<div className='mx-auto py-20'>
			<HeaderText text={'Skills'} />
			<h2 className='text-5xl font-black my-14 '>USING NOW:</h2>
			<div className='grid gap-36'>
				<Skill />
			</div>
		</div>
	);
}

function Skill() {
	return (
		<>
			<div className='mx-auto my-0  text-center w-2/6 grid gap-3'>
				<img src={HtmlImg} alt='Skill logo' />
				<p className='font-black'>HTML</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3'>
				<img src={CssImg} alt='Skill logo' />
				<p className='font-black'>CSS</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3'>
				<img src={SassImg} alt='Skill logo' />
				<p className='font-black'>SASS</p>
			</div>
		</>
	);
}

export default Skills;
