export default function Banner() {
	return (
		<section className="relative mb-4 ">
			<div
				className="w-full h-full opacity-80"
				style={{
					backgroundImage: "url('/images/deutsch.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "500px",
				}}
			></div>
			<div className="absolute w-full top-20 text-center bg-cgray opacity-80">
				<h2 className="text-5xl">World Motors</h2>
				<p className="text-xl text-name"> Fake Quality and Reasonble Price</p>
			</div>
		</section>
	);
}
