"use client";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
export default function FavIcon() {
	const [isFav, setIsFav] = useState(false);
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsFav((prev) => !prev);
	};
	return (
		<div onClick={handleClick} className="p-1 rounded-md">
			{isFav ? (
				<AiFillStar size={20} color="gold" />
			) : (
				<AiOutlineStar size={20} color="gold" />
			)}
		</div>
	);
}
