import ItLogo from '../assets/ITB.png';

function Banner() {
	return (
		<div className='relative bg-[#1D1D1D] text-white h-[500px] lg:h-[300px]'>
			<div className='absolute w-full z-10 text-center  left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2'>
				{/* banner header */}
				<div className='w-52 mx-auto my-0  font-black text-4xl'>
					<p>IT BERRIES</p>
				</div>
				{/* Banner text */}
				<div className='text-justify text-sm p-7 lg:w-3/4 lg:mx-auto lg:my-0'>
					<p>
						Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
						varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
						quis libero viverra facilisis ut ac est. Morbi commodo, eros in
						dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
						tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
						Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
						varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
						tempor, accumsan nec eros.
					</p>
				</div>
				{/* Button */}
				{/* <Button text={'More'} /> */}
				<button
					className='w-52 mx-auto my-0
			font-black text-4xl border-x-4 p-2  border-white'>
					More
				</button>
			</div>

			<div className='absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
				<img className='mx-auto my-0 lg:hidden' src={ItLogo} alt='' />
			</div>
		</div>
	);
}

export default Banner;
