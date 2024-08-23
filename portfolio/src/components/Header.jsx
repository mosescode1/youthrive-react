import Logo from '../assets/logo2.png';
import Hamburger from '../assets/hamburger.svg';

function Header() {
	return (
		<div className='bg-black p-3 flex items-center justify-between'>
			<div>
				<img src={Logo} alt='Logo' />
			</div>

			<div className='hidden lg:block mr-20 p-2 '>
				<Navlink />
			</div>

			<div className='lg:hidden'>
				<img src={Hamburger} alt='Hamburger' />
			</div>
		</div>
	);
}

function Navlink() {
	return (
		<>
			<ul className='text-white flex gap-10  font-black text-xl'>
				<li>
					<a href=''>About Me</a>
				</li>
				<li>
					<a href=''>Skills</a>
				</li>
				<li>
					<a href=''>Portfolio</a>
				</li>
				<li className='bg-white text-black px-2 rounded-full'>
					<a href=''>CONTACT ME</a>
				</li>
			</ul>
		</>
	);
}
export default Header;
