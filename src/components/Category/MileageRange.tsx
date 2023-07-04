"use client";

import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";

export default function MileageRange() {
	const [value, setValue] = useState<number[]>([0, 10000]);

	const onSliderChange = (newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	return (
		<div className="w-full">
			<div className="my-6 mx-6 sm:mx-0">
				<Slider
					range
					min={0}
					max={210000}
					step={10000}
					marks={{
						0: 0,
						// 500: 500,
						100000: "10만km",
						// 1500: 1500,
						// 2000: 2000,
						// 2500: 2500,
						200000: "20",
					}}
					value={value}
					pushable={true}
					onChange={onSliderChange}
				/>
			</div>
			{value[1] === 210000 ? (
				<div>{`${value[1]}km ~`}</div>
			) : value[1] === 10000 ? (
				<div>{`0km~`}</div>
			) : (
				<div>{`${value[0]}km ~ ${value[1]}km`}</div>
			)}
		</div>
	);
}
