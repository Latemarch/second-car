"use client";

import { useState } from "react";

type Props = {
	selections: any;
};
export default function Input({ selections }: Props) {
	const [selectedId, setSelectedId] = useState<string>("");
	const [selection, setSelection] = useState<string[]>([
		"제조사",
		"모델",
		"세부모델",
	]);
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const id = e.currentTarget.id;
		if (id === selectedId) {
			setSelectedId("");
		} else {
			setSelectedId(e.currentTarget.id);
		}
	};
	return (
		<div className="">
			<div className="fixed inset-0 bg-gray-200"></div>
			<div className="relative flex flex-col">
				<div className="flex w-full gap-[1px]">
					{selection.map((item, idx) => (
						<div
							id={idx.toString()}
							key={item}
							onClick={handleClick}
							className={`w-1/3 p-2 bg-white cursor-pointer gap-[1px] ${
								selectedId === idx.toString() ? "mb-0" : "mb-[1px]"
							}`}
						>
							{item}
						</div>
					))}
				</div>
				<div className="flex flex-col items-start p-4 gap-4 bg-white">
					{selectedId === "0" &&
						["국산차", "수입차"].map((category: string) => (
							<div key={category} className="flex w-full flex-col items-start">
								<p className="mb-2 text-start border-b-2 border-accent w-1/3">
									{category}
								</p>
								<div className="flex flex-wrap gap-4">
									{Object.keys(selections[category]).map((item: string) => (
										<div key={item} id={item}>
											{item}
										</div>
									))}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
