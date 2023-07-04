import ManufacturerList from "./Category/ManufacturerList";
import PriceRange from "./Category/PriceRange";

const domestic = ["현대", "기아", "르노코리아", "제네시스", "기타"];
const global = ["벤츠", "BMW", "아우디", "폭스바겐", "기타"];
export default function SearchBox() {
	return (
		<div className="absolute -top-16 bg-white w-11/12  max-w-3xl rounded-lg drop-shadow-md  p-4">
			<h2 className="text-start px-2">자동차 간편 검색</h2>
			<div className="flex flex-col md:flex-row justify-around items-center">
				<div className="flex items-start my-2">
					<ManufacturerList name="국산차" manufacturer={domestic} />
					<ManufacturerList name="수입차" manufacturer={global} />
				</div>
				<div className="w-4/5 sm:w-1/3">
					<p>가격</p>
					<PriceRange />
				</div>
			</div>
		</div>
	);
}
