export default function Footer() {
	return (
		<footer className="bg-zinc-50 border-t  mt-8">
			<div className=" container mx-auto text-left max-w-7xl p-4 md:p-10 ">
				<ul className="flex flex-col gap-1">
					<li>
						<a
							href="#"
							className="flex gap-4 text-gray-600 hover:text-gray-800"
						>
							<p>대표 : 정혜성</p>
							<p>|</p>
							<p>주소 : 수원시 권선구 권선로 308-5 도이치오토월드 1055호 </p>
						</a>
					</li>
					<li>
						<a href="#" className="text-gray-600 hover:text-gray-800">
							<p>사업자 등록번호: 210-99-33322</p>
						</a>
					</li>

					<li>
						<a href="#" className="text-gray-600 hover:text-gray-800">
							대표전화 : 1588-1234
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
