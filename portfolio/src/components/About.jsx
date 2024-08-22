import HeaderText from './HeaderText';
import SectionDivider from './SectionDivider';

function About() {
	return (
		<>
			<HeaderText text={'About Me'} />
			<p>
				My name is Tomasz Gajda, i am a third year Applied Computer Science
				student at the AGH University of Science and Technology in Krakow. I
				have been learning Front-End technologies for a year and this time was
				just enough for me to make sure that this is my place in the industry.
			</p>

			<p>
				Membership in the science club developed my design skills, which quickly
				turned into a new hobby. I am fluent in English (spoken and written) and
				intermediate Spanish. Apart from designing and programming websites, my
				passion is all kinds of motorsport - from rallies to the very king of
				motorsport - formula 1.
			</p>
			<SectionDivider text={'Explore'} />
		</>
	);
}

export default About;
