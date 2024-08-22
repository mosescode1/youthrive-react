function Form() {
	return (
		<div className='bg-[#01010129] p-10'>
			<form>
				<div className='grid gap-9 my-10  lg:w-1/2 lg:mx-auto lg:my-0'>
					<input
						className='p-5 bg-transparent border-l-4 border-b-4 border-black'
						type='text'
						placeholder='Enter Your Name*'
						id='name'
						name='name'
					/>

					<input
						className='p-5 bg-transparent border-l-4 border-b-4 border-black'
						type='email'
						name='email'
						id='email'
						placeholder='Enter Your Email*'
					/>

					<input
						className='p-5 bg-transparent border-l-4 border-b-4 border-black'
						type='number'
						name='number'
						id='number'
						placeholder='Enter Your Phone No'
					/>

					<textarea
						className='bg-transparent border-l-4 border-b-4 border-black h-[150px] p-5'
						name='comment'
						id='comment'
						placeholder='Your Message*'></textarea>

					<button
						className='w-52 mx-auto my-0
			font-black text-4xl border-x-4 p-2  border-black'>
						SUBMIT
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
