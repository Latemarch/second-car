export default function Footer() {
	return (
		<footer className="bg-zinc-50 border-t  mt-8">
			<div className=" container mx-auto text-left max-w-7xl p-4 md:p-10 ">
				<ul className="flex flex-col ">
					<li>
						<a href="#" className="text-gray-600 hover:text-gray-800">
							Terms of use
						</a>
					</li>
					<li>
						<a href="#" className="text-gray-600 hover:text-gray-800">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="text-gray-600 hover:text-gray-800">
							Contact Us
						</a>
					</li>
					<p className="text-sm text-gray-800 py-4">
						&copy; {new Date().getFullYear()} World Motors. All Rights Reserved.
					</p>
				</ul>
			</div>
		</footer>
	);
}
