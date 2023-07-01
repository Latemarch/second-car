import Link from "next/link";
import SearchInput from "./SearchInput";

export default function Header() {
	return (
		<header className="flex flex-col w-full min-h-[50px] items-center z-50 h-28">
			<div className="w-full max-w-7xl mx-auto">
				<div className="flex justify-end w-full px-6 pt-4 text-sm text-gray-500 gap-4">
					<button>회원가입</button>
					<button>로그인</button>
				</div>
				<div className="flex h-full w-full justify-between	">
					<div className="flex md:flex-1 pl-6 h-full items-center ">
						<Link href="/">
							<div
								className="absolute top-4 "
								style={{
									backgroundImage: "url('/images/car-logo2.svg')",
									backgroundSize: "cover",
									backgroundPosition: "center",
									width: "90px",
									height: "40px",
								}}
							></div>
							<h1 className="text-xl">세계 자동차</h1>
						</Link>
						{/* <Link href="/products">상품보기</Link> */}
					</div>
					{/* <div className="flex h-full"> */}
					<div className="flex flex-1 h-full items-center px-6 ">
						<SearchInput />
					</div>
					<div className="flex flex-1 h-full justify-end gap-8 pr-6 items-center">
						<Link href="/products">
							<button className="text-xl">내차 사기</button>
						</Link>
						<button className="text-xl">내차 팔기</button>
					</div>
					{/* </div> */}
				</div>
			</div>
		</header>
	);
}
