import DesignImg from '../images/design.png';
import DevImg from '../images/deve.png';
import MainIng from '../images/maintenance.png';

function Services() {
	return (
		<div className='lg:grid grid-cols-2 lg:w-4/6 lg:mx-auto lg:my-0'>
			<div className='relative p-8'>
				<div>
					<header className='text-2xl font-black'>DESIGN</header>
					<p>
						I can design the website based on your needs and suggestions. I can
						also create it from scratch by consulting with you during work.
					</p>
				</div>
				<div className='absolute top-0 left-0 '>
					<img src={DesignImg} alt='' />
				</div>
			</div>

			<div className='relative p-8'>
				<div>
					<header className='text-2xl font-black'>DEVELOPMENT</header>
					<p>
						Based on a project created by me or another one, sent by you, I can
						program the website to be fully functional and responsive.
					</p>
				</div>
				<div className='absolute top-0 left-0 '>
					<img src={DevImg} alt='' />
				</div>
			</div>

			<div className='lg:col-span-2 '>
				<div className='relative p-8 lg:w-3/5 lg:mx-auto lg:my-0'>
					<div>
						<header className='text-2xl font-black'>MAINTENANCE</header>
						<p>
							In case of any problems or the need for changes, I can introduce
							new functionalities and solutions.
						</p>
					</div>
					<div className='absolute top-0 left-0 '>
						<img src={MainIng} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
