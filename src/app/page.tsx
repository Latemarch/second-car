import Banner from "@/components/Banner";
import GeneralList from "@/components/GeneralList";
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
				<div className="mb-80">
					<div className="flex relative w-full items-center justify-center">
						<SearchBox />
					</div>
				</div>
				<div className="md:p-4 md:flex mb-10">
					<div className="mb-10">
						<SideBar />
					</div>
					<div className="flex flex-col gap-20">
						<RecommendList products={products.slice(0, 6)} />
						<GeneralList products={products.slice(12, 24)} />
					</div>
				</div>
			</div>
		</section>
	);
}
