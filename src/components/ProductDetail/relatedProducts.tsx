import { getCarList } from "@/utils/utils";
import ProductCard from "../ProductCard";

export default async function RelatedProducts() {
	const products = await getCarList();

	return (
		<div>
			<div className="flex-flex-col w-2/3 border-b-4 border-accent pb-1 mb-6">
				<h1>이 차량과 유사한 차량</h1>
			</div>
			<ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
				{products.slice(0, 6).map((product: any) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</div>
	);
}
