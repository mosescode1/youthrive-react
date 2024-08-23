import AngImg from '../assets/angleski.png';
import SpainImg from '../assets/spanish.png';
import CplusImg from '../assets/bootstrap.png';
import CImg from '../assets/c.png';

function OtherSkills() {
	return (
		<div className='mx-auto  lg:w-3/5 hidden lg:block'>
			<h2 className='text-5xl font-black my-14 '>OTHER SKILLS:</h2>
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
				<img src={AngImg} alt='Skill logo' />
				<p className='font-black'>ANGIELSKI C1/C2</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={SpainImg} alt='Skill logo' />
				<p className='font-black'>HISZPAŃSKI B1/B2</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={CplusImg} alt='Skill logo' />
				<p className='font-black'>C++</p>
			</div>

			<div className='mx-auto my-0  text-center'>
				<img src={CImg} alt='Skill logo' />
				<p className='font-black'>C</p>
			</div>
		</>
	);
}

export default OtherSkills;
