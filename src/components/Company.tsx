"use client";
import { setCategory } from "@/redux/slices/categorySlice";
import { Store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

type Props = {
	company: string;
};
export default function Company({ company }: Props) {
	const { Manufacturer } = useSelector((state: Store) => state.category);
	const dispatch = useDispatch();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setCategory({ key: "Manufacturer", value: e.target.id }));
	};
	return (
		<li className="shrink-0" key={company}>
			<div className="flex items-center">
				<input
					id={company}
					type="checkbox"
					checked={Manufacturer.includes(company)}
					onChange={handleChange}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 accent-accent "
				/>
				<label
					htmlFor={company}
					className="ml-1 text-sm font-medium text-gray-900 "
				>
					{company}
				</label>
			</div>
		</li>
	);
}
