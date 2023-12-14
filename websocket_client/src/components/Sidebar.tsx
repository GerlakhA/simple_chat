const Sidebar = () => {
	return (
		<div className='border-r border-neutral-600 flex flex-col w-[150px] h-screen p-8'>
			<h4 className='text-3xl text-gray-500 mb-4'>Users</h4>
			<ul className='flex flex-col justify-center items-center gap-y-4'>
				<li>Shadouth</li>
				<li>John</li>
				<li>Kate</li>
				<li>James</li>
				<li>Max</li>
			</ul>
		</div>
	)
}

export default Sidebar
