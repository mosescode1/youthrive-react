import NodeImg from '../assets/nodejs.png';
import MysqlImg from '../assets/mysql.png';
import MongoImg from '../assets/mongodb.png';
import TypeScpImg from '../assets/typescript.png';

function Learning() {
	return (
		<div className='mx-auto  lg:w-3/5 hidden lg:block'>
			<h2 className='text-5xl font-black my-14 '>LEARNING:</h2>
			<div className='grid gap-36 lg:grid-cols-4'>
				<Skill />
			</div>
		</div>
	);
}

function Skill() {
	return (
		<>
			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={NodeImg} alt='Skill logo' />
				<p className='font-black'>NODEJS</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={MysqlImg} alt='Skill logo' />
				<p className='font-black'>MYSQL</p>
			</div>

			<div className='mx-auto my-0  text-center w-2/6 grid gap-3 lg:w-full'>
				<img src={MongoImg} alt='Skill logo' />
				<p className='font-black'>MONGODB</p>
			</div>

			<div className='mx-auto my-0  text-center'>
				<img src={TypeScpImg} alt='Skill logo' />
				<p className='font-black'>TYPESCRIPT</p>
			</div>
		</>
	);
}

export default Learning;
