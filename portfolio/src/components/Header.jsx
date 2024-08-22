import Logo from '../assets/logo2.png';
import Hamburger from '../assets/hamburger.svg';

function Header() {
	return (
		<div className='bg-black p-3 flex items-center justify-between'>
			<div>
				<img src={Logo} alt='Logo' />
			</div>

			<div className=''>
				<img src={Hamburger} alt='Hamburger' />
			</div>
		</div>
	);
}

export default Header;
