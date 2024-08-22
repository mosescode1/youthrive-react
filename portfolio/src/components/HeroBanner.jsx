import Image from '../images/personal-image.png';
import GitIcon from '../assets/github.png';
import EmailIcon from '../assets/email.png';
import LinkedinIcon from '../assets/linkedin.png';

function HeroBanner() {
	return (
		<div className='bg-black overflow-hidden relative'>
			<div className='w-full h-[90vh] '>
				<img
					className='h-full w-full ml-24'
					src={Image}
					alt='background image'
				/>
			</div>
			<div className='overlay '>
				<div className='p-3 text-2xl text-white'>
					<h1 className='text-3xl font-semibold'>Hi, i am</h1>
					<p className='text-5xl font-black'>
						<strong>Tomasz Gajda</strong>
					</p>
					<p className='text-lg '>Front-end Developer / UI Designer</p>
				</div>
				<div className='flex absolute flex-col right-5 bottom-5 gap-3'>
					<Socials github={GitIcon} email={EmailIcon} linkedin={LinkedinIcon} />
				</div>
			</div>
		</div>
	);
}

function Socials({ github, email, linkedin }) {
	return (
		<>
			<div className='w-10  h-12'>
				<img className='w-full h-full' src={github} alt='' />
			</div>
			<div className='w-10  h-12'>
				<img className='w-full h-full' src={email} alt='' />
			</div>
			<div className='w-10  h-12'>
				<img className='w-full h-full' src={linkedin} alt='' />
			</div>
		</>
	);
}
export default HeroBanner;
