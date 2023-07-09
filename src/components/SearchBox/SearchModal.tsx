"use client";

import { Store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import CompanyList from "./CompanyList";
import { setCategoryWindowId } from "@/redux/slices/simpleCategory";
import ModelList from "./ModelList";
import SpecificModelList from "./SpecificModelList";

export default function SearchModal() {
	const { windowId } = useSelector((state: Store) => state.simpleCategory);
	const dispatch = useDispatch();

	return (
		<div className="w-full items-start gap-4 bg-white">
			{windowId === 0 && (
				<div className="p-6" onClick={() => dispatch(setCategoryWindowId(1))}>
					<CompanyList />
				</div>
			)}
			{windowId === 1 && (
				<div className="p-6" onClick={() => dispatch(setCategoryWindowId(2))}>
					<ModelList />
				</div>
			)}
			{windowId === 2 && (
				<div className="p-6" onClick={() => dispatch(setCategoryWindowId(3))}>
					<SpecificModelList />
				</div>
			)}
		</div>
	);
}
