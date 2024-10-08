import PortBg from '../images/mobilePort.png';
import HeaderText from './HeaderText';

import ImageDes from '../images/portfoliobg.png';

function Portfolio() {
	return (
		<div className='relative'>
			<img
				className='object-contain object-center w-full lg:hidden'
				src={PortBg}
				alt=''
			/>
			<img className='hidden lg:block' src={ImageDes} alt='' />
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<HeaderText text={'PORTFOLIO'} />
			</div>
		</div>
	);
}

export default Portfolio;
