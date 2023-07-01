import Banner from "@/components/Banner";
import RecommendList from "@/components/RecommendList";
import SearchBox from "@/components/SearchBox";
import SideBar from "@/components/SideBar";
import { getCarList } from "@/utils/utils";

export default async function Home() {
	const products = await getCarList();
	return (
		<section className="flex flex-col w-full text-center">
			<Banner />
			<div className="w-full max-w-7xl mx-auto">
				<div className="mb-72">
					<div className="flex w-full items-center justify-center">
						<SearchBox />
					</div>
				</div>
				<div className="p-4 flex gap-4 mb-10">
					<SideBar />
					<RecommendList products={products.slice(0, 6)} />
				</div>
			</div>
		</section>
	);
}
