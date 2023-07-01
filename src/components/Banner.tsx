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
		</section>
	);
}
