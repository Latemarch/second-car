import Link from "next/link";

export default function Banner() {
	return (
		<section className="relative bg-gray-200 mb-4 ">
			<div
				className="h-full "
				style={{
					backgroundImage: "url('/images/sitebg.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "500px",
				}}
			></div>
			<div className="flex flex-col absolute gap-6 top-24 left-6 md:left-32 lg:left-48 justify-center items-start">
				<h1 className="text-4xl sm:text-6xl text-yellow-500">
					30일 보증제 서비스
				</h1>
				<div className="flex flex-col items-start">
					<p className="text-xl sm:text-2xl text-yellow-800">
						30일/2000km 성능 보장 보험과 함께
					</p>
					<p className="text-xl sm:text-2xl text-yellow-800">
						수리 걱정 없는 중고차 구매하세요
					</p>
				</div>
				<Link href="/products">
					<button className="bg-yellow-400 text-white px-16 py-3 text-2xl rounded-md">
						차량 보기
					</button>
				</Link>
			</div>
		</section>
	);
}
