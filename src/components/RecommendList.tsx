import ProductCard from "./ProductCard";

export default function RecommendList({ products }: { products: any[] }) {
	return (
		<section className="flex flex-col items-start">
			<h2 className="w-2/3 border-b text-start mb-4 text-2xl">추천 매물</h2>
			<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 text-sm">
				{products.slice(0, 10).map((product: any) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
