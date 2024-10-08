import About from './About';
import SeperatorSlack from './Seperator';
import Services from './Services';
import Skills from './Skills';
import Learning from './Learning';
import OtherSkills from './OtherSkills';

function Main() {
	return (
		// About me
		<div className='p-10 grid gap-7   bg-gradient-to-tr text-justify bg-[#01010129]'>
			<About />
			<SeperatorSlack />
			<Services />
			<SeperatorSlack />
			<Skills />
			<Learning />
			<OtherSkills />
		</div>
	);
}

export default Main;
