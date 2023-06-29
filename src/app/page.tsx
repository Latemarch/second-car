import ProductCard from "@/components/ProductCard";
import { getCarList } from "@/utils/utils";

export default async function Home() {
	const products = await getCarList();
	return (
		<main className="text-center p-4">
			<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 text-sm">
				{products.slice(0, 10).map((product: any) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</main>
	);
}
