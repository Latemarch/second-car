export default function Header() {
	return (
		<header className="flex min-h-[50px] items-center ">
			<div className="flex pl-6 w-52 h-full items-center border-b border-r  ">
				<h1 className="">세계 자동차</h1>
			</div>
			<div className="flex grow h-full">
				<div className="flex w-2/3 h-full items-center pl-6 border-b">
					search
				</div>

				<div className="flex w-2/5 h-full border-l border-b ">
					<button className="w-40 text-xl font-han">내차 팔기</button>
				</div>
			</div>
		</header>
	);
}
