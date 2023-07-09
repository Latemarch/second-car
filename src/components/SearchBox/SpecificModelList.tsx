"use client";

import { Store } from "@/redux/store";
import { getModelList, getSpecificModelList } from "@/utils/clientSideFetch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectionButton from "./SelectionButton";

export default function SpecificModelList() {
	const {
		options: { model },
	} = useSelector((state: Store) => state.simpleCategory);
	const [models, setModels] = useState<any>([1, 2, 3]);
	useEffect(() => {
		const fetchData = async () => {
			const modelList = await getSpecificModelList(model);
			setModels(modelList);
		};
		fetchData();
	}, []);
	console.log(models);
	return (
		<div className="flex w-full flex-col items-start p-4 gap-4">
			<p className="flex border-b-2 w-full border-accent pb-3">
				차량의 모델을 선택해주세요.
			</p>
			<div className="flex flex-wrap gap-5">
				{models.map((model: string) => (
					<SelectionButton
						key={model}
						value={model}
						category={"specificModel"}
					/>
				))}
			</div>
		</div>
	);
}
