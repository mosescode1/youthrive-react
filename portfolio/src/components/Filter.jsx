function Filter() {
	return (
		<div className='bg-black text-white py-16 px-5 text-2xl'>
			<ul className='grid grid-cols-2 text-center gap-8'>
				<li className='border-b-2 pb-3'>ALL</li>
				<li className='border-b-2 pb-3'>CODED</li>
				<li className='col-span-2'>
					<span className='col-span-2 border-b-2 pb-3 block'>DESIGN</span>
				</li>
			</ul>
		</div>
	);
}

export default Filter;
