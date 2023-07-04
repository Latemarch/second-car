import ProductOptions from "@/components/ProductDetail/ProductOptions";
import GeneralList from "@/components/ProductsPage/GeneralList";
import RecommendList from "@/components/ProductsPage/RecommendList";
import SideBar from "@/components/SideBar/SideBar";
import { getCarList } from "@/utils/utils";

export default async function Products() {
	const products = await getCarList();
	return (
		<div className="md:flex w-full max-w-7xl mx-auto">
			<SideBar />
			<main className="flex-col md:flex text-center p-4 pt-20">
				<RecommendList products={products} />
				<GeneralList products={products.slice(12, 24)} />
			</main>
		</div>
	);
}
