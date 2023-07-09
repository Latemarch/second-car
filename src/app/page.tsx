import Banner from "@/components/Banner";
import RecommendList from "@/components/ProductsPage/RecommendList";
import SearchBox from "@/components/SearchBox/SearchBox";
import SideBar from "@/components/SideBar/SideBar";
import { getCarList } from "@/utils/utils";

export default async function Home() {
	const products = await getCarList();
	return (
		<section className="flex flex-col w-full text-center">
			<Banner />
			<div className="w-full max-w-7xl mx-auto">
				<div className="mb-80">
					<div className="flex relative w-full items-center justify-center">
						<SearchBox />
					</div>
				</div>
				<div className="md:p-4 md:flex mb-10">
					<SideBar />
					<div className="flex flex-col gap-20">
						<RecommendList products={products.slice(0, 6)} />
					</div>
				</div>
			</div>
		</section>
	);
}
