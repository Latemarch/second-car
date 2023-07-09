"use client";

import {
	setCategoryWindowId,
	setSimpleCategoryOptions,
} from "@/redux/slices/simpleCategory";
import { Store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const buttonObj = {
	"0": "",
	"1": "",
	"2": "",
};
const defaultButton = ["제조사", "모델", "세부모델"];
export default function CategoryContainerr() {
	const {
		windowId,
		options: { manufacturer, model, specificModel },
	} = useSelector((state: Store) => state.simpleCategory);
	const dispatch = useDispatch();
	buttonObj["0"] = manufacturer || "";
	buttonObj["1"] = model || "";
	buttonObj["2"] = specificModel || "";

	const deleteSelction = (e: React.MouseEvent<HTMLDivElement>) => {
		const idx = Number(e.currentTarget.dataset.id);
		e.stopPropagation();
		dispatch(setCategoryWindowId(idx));
		buttonObj["0"] = "";
		dispatch(setSimpleCategoryOptions({ key: "specificModel", value: "" }));
		if (idx === 2) return;
		buttonObj["1"] = "";
		dispatch(setSimpleCategoryOptions({ key: "model", value: "" }));
		if (idx === 1) return;
		buttonObj["2"] = "";
		dispatch(setSimpleCategoryOptions({ key: "manufacturer", value: "" }));
		dispatch(setCategoryWindowId(-1));
	};
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const idx = e.currentTarget.dataset.id;
		const idxM1 = (Number(idx) - 1).toString() as keyof typeof buttonObj;
		if (idx !== "0" && buttonObj[idxM1] === "") return;
		dispatch(setCategoryWindowId(Number(idx)));
	};
	return (
		<div className="flex w-full gap-[1px]">
			{Object.entries(buttonObj).map(([key, item], idx) => (
				<div
					onClick={handleClick}
					key={key}
					data-id={idx}
					className={`w-1/3 p-2 relative flex justify-center bg-white cursor-pointer gap-[1px] ${
						windowId === idx ? "mb-0 text-blue-800" : "mb-[1px]"
					} ${
						buttonObj[(idx - 1).toString() as keyof typeof buttonObj] === ""
							? "opacity-40 cursor-not-allowed"
							: ""
					}`}
				>
					{item ? item : defaultButton[idx]}
					<div
						data-id={idx}
						className={`absolute right-3 px-2 cursor-pointer`}
						onClick={deleteSelction}
					>
						{buttonObj[idx.toString() as keyof typeof buttonObj] !== "" && (
							<p>x</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
