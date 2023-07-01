import ProductCard from "@/components/ProductCard";
import RecommendList from "@/components/RecommendList";
import { getCarList } from "@/utils/utils";

export default async function Home() {
	const products = await getCarList();
	return (
		<main className="text-center p-4 pt-20">
			<RecommendList products={products} />
		</main>
	);
}
