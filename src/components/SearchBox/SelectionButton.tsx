import {
	TOptions,
	setSimpleCategoryOptions,
} from "@/redux/slices/simpleCategory";
import { useDispatch } from "react-redux";

export default function SelectionButton({
	value,
	category,
}: {
	value: string;
	category: keyof TOptions;
}) {
	const dispatch = useDispatch();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setSimpleCategoryOptions({ key: category, value }));
		if (category === "specificModel") return;
		dispatch(setSimpleCategoryOptions({ key: "specificModel", value: "" }));
		if (category === "model") return;
		dispatch(setSimpleCategoryOptions({ key: "model", value: "" }));
	};
	return (
		<>
			<button
				className="cursor-pointer p-1"
				key={value}
				data-name={value}
				onClick={handleClick}
			>
				{value}
			</button>
		</>
	);
}
