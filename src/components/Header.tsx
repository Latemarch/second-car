import Link from "next/link";
import SearchInput from "./SearchInput";

export default function Header() {
	return (
		<header className="flex w-full min-h-[50px] items-center z-50 h-16">
			<div className="flex h-full w-full max-w-5xl m-auto">
				<div className="flex pl-6 w-52 h-full items-center ">
					<Link href="/">
						<h1 className="">세계 자동차</h1>
					</Link>
				</div>
				<div className="flex w-full h-full">
					<div className="flex w-full h-full items-center px-6 ">
						<SearchInput />
					</div>
					<div className="flex w-52 h-full justify-end  pr-6">
						<button className="text-xl font-han">내차 팔기</button>
					</div>
				</div>
			</div>
		</header>
	);
}
