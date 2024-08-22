import Img1 from '../images/Project1.png';
import Img2 from '../images/Project3.png';
import Img3 from '../images/Project4.png';
import Img4 from '../images/Project3.png';
import Img5 from '../images/Project6.png';
import Img6 from '../images/Project5.png';
// import

function Project() {
	return (
		<div className=''>
			<div className='hidden w'>
				<img className='w-full' src={Img1} alt='Image 1' />
			</div>

			<div className='relative'>
				<img className='w-full' src={Img2} alt='Image 1' />

				{/* Text */}
				<div className='absolute z-10 text-4xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center'>
					<p className='text-xl'>coded, designed</p>
					<p className='font-black text-6xl mb-3'>eatsome</p>
					<p className='text-xl mb-5 mx-6'>
						Restaurant browsing in React.js (Using Yelp API)
					</p>
					{/* button text */}
					<div className='flex gap-1 mx-6'>
						<button
							className='w-52 mx-auto my-0
			font-black text-4xl border-x-4 p-2  border-white '>
							DEMO
						</button>

						<button
							className='w-52 mx-auto my-0
			font-black text-4xl border-x-4 p-2  border-white'>
							More
						</button>
					</div>
				</div>
				<div className='absolute top-0 w-full h-full bg-black opacity-75 '></div>
			</div>

			<div>
				<img className='w-full' src={Img3} alt='Image 1' />
			</div>
			<div>
				<img className='w-full' src={Img4} alt='Image 1' />
			</div>
			<div className='hidden'>
				<img className='w-full' src={Img5} alt='Image 1' />
			</div>

			<div className='hidden'>
				<img className='w-full' src={Img6} alt='Image 1' />
			</div>

			{/* TextMore  */}
			<div className='bg-black text-white text-3xl p-5 text-center font-bold'>
				<p>And many more come!</p>
			</div>
		</div>
	);
}

export default Project;
