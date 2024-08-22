import TopIcon from '../assets/ic_baseline-double-arrow.svg';
import FacebookIcon from '../assets/facebook.png';
import EmailIcon from '../assets/email.png';
import InstaIcon from '../assets/insta.svg';
import LinkIcon from '../assets/link.svg';

function Footer() {
	return (
		<div className='bg-black p-10 text-white text-center'>
			{/* icon */}
			<div className='mb-3 w-6 mx-auto my-0 h-6'>
				<img className='w-full' src={TopIcon} alt='' />
			</div>
			{/* text back to top */}
			<p className='font-black text-2xl'>BACK TO TOP</p>
			{/* socials flex */}
			<SocialIcons />
			<p className='text-xl font-thin mt-3'>
				@2020 Tomasz Gajda All Rights Reserved.
			</p>
		</div>
	);
}

function SocialIcons() {
	return (
		<div className='grid justify-center'>
			<div className='flex gap-4 my-5'>
				<img src={FacebookIcon} alt='' />
				<img src={LinkIcon} alt='' />
				<img src={InstaIcon} alt='' />
				<img src={EmailIcon} alt='' />
			</div>
		</div>
	);
}
export default Footer;
