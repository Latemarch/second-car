import { FaArrowRight } from "react-icons/fa";
import SearchInput from "../Header/SearchInput";
import TagButton from "../TagButton";
import CategoryContainer from "./CategoryContainer";
import SearchModal from "./SearchModal";

export default function SelectionContainer() {
	return (
		<div className="relative border-t ">
			<div className="flex bg-gray-300 border-x">
				<CategoryContainer />
				<button className="w-20 bg-accent">검색</button>
			</div>
			<div className="flex w-full absolute z-50 border-b border-x">
				<SearchModal />
			</div>
			<div className="flex flex-col items-start mt-6">
				<p className="m-2 border-accent text-xl">키워드로 검색하기</p>
				<div className="sm:flex items-center gap-10  justify-between w-full">
					<SearchInput />
					<div className="flex mt-5 sm:mt-0 w-full justify-between ">
						<TagButton name="전체" />
						<TagButton name="승용차" />
						<TagButton name="SUV" />
					</div>
				</div>
			</div>
		</div>
	);
}
