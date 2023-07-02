import RecommendList from "@/components/RecommendList";
import { getCarList } from "@/utils/utils";

export default async function Products() {
	const products = await getCarList();
	return (
		<main className="text-center p-4 pt-20">
			<RecommendList products={products} />
		</main>
	);
}
