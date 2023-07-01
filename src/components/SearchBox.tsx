import Company from "./Company";
import DoubleRange from "./DoubleRange";

const domestic = ["현대", "기아", "르노코리아", "제네시스", "기타"];
const global = ["벤츠", "BMW", "아우디", "폭스바겐", "기타"];
export default function SearchBox() {
	return (
		<div className="absolute bg-white w-2/3 max-w-xl rounded-lg drop-shadow-md  p-8 pt-4">
			<h2>자동차 간편 검색</h2>
			<div className="flex flex-col items-start my-6">
				<p className="ml-2">국산차 </p>
				<ul className="flex flex-wrap gap-4 px-2 mb-1">
					{domestic.map((company) => (
						<Company key={company} company={company} />
					))}
				</ul>
				<p className="ml-2 mt-4">수입차 </p>
				<ul className="flex flex-wrap gap-4 px-2 mb-1">
					{global.map((company) => (
						<Company key={company} company={company} />
					))}
				</ul>
			</div>

			<DoubleRange />
			<button className="w-20 h-10 bg-gray-400 rounded-md">검색</button>
		</div>
	);
}
