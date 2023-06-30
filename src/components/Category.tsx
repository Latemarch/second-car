"use client";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const divClass =
	"flex justify-between items-center min-h-16 gap-4 px-6  p-2 border-b border-x ";
type Props = {
	name: string;
	children: React.ReactNode;
};
export default function Category({ name, children }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div className={divClass}>
				<p>{name}</p>
				<div
					className="cursor-pointer"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					{isOpen ? <FaAngleDown /> : <FaAngleRight />}
				</div>
			</div>
			<div className={`${isOpen ? "h-auto" : "hidden"} ${divClass} `}>
				{children}
			</div>
		</div>
	);
}
