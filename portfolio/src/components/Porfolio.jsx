import PortBg from '../images/mobilePort.png';
import HeaderText from './HeaderText';

function Portfolio() {
	return (
		<div className='relative'>
			<img
				className='object-contain object-center w-full'
				src={PortBg}
				alt=''
			/>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<HeaderText text={'PORTFOLIO'} />
			</div>
		</div>
	);
}

export default Portfolio;
