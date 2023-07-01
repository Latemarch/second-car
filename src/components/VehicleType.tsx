"use client";

import { setCategory } from "@/redux/slices/categorySlice";
import { Store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

type Props = {
	type: string;
};
export default function VehicleType({ type }: Props) {
	const { type: carType } = useSelector((state: Store) => state.category);
	const dispatch = useDispatch();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setCategory({ key: "type", value: e.target.id }));
	};
	return (
		<li key={type}>
			<div className="flex items-center mb-4 ">
				<input
					id={type}
					type="checkbox"
					checked={carType.includes(type)}
					onChange={handleChange}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 accent-accent "
				/>
				<label
					htmlFor={type}
					className="ml-2 text-sm font-medium text-gray-900 "
				>
					{type}
				</label>
			</div>
		</li>
	);
}
