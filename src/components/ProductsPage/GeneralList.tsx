import ProductCard from "../ProductCard";

export default function GeneralList({ products }: { products: any[] }) {
	return (
		<section className="flex flex-col items-start sm:p-4">
			<h2 className="pl-2 sm:pl-0 w-2/3 border-b-4 border-accent text-start mb-4 text-2xl ">
				일반 매물
			</h2>
			<ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 text-sm">
				{products.slice(0, 12).map((product: any) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
