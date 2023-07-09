import { BsSearch } from "react-icons/bs";
export default function SearchInput() {
	return (
		<div className="flex items-center relative pl-2 w-full">
			<input
				type="text"
				className="p-4 drop-shadow-sm h-8 w-full rounded-full ring-1 ring-accent   focus:outline-none focus:border-red-300"
			/>
			<div className="right-0 absolute p-2">
				<BsSearch color="gray" />
			</div>
		</div>
	);
}
