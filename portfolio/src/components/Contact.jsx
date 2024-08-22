import HeaderText from './HeaderText';
import SeperatorSlack from './Seperator';
function Contact() {
	return (
		<div className='text-center p-16 bg-[#01010129]'>
			<div className='mb-8 w-52 mx-auto my-0'>
				<HeaderText text={'CONTACT'} />
			</div>

			<p className='text-2xl lg:w-1/2 lg:mx-auto lg:my-0'>
				My name is Tomasz Gajda, I’m a third year Applied Computer Science
				student at AGH University of Science and Technology in Cracow, Poland.
			</p>
			<SeperatorSlack />
		</div>
	);
}

export default Contact;
