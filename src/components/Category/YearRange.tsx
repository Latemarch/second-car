"use client";

import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";

export default function YearRange() {
	const [value, setValue] = useState<number[]>([2005, 2023]);

	const onSliderChange = (newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	return (
		<div className="w-full">
			<div className="my-6 mx-6 sm:mx-0">
				<Slider
					range
					min={2005}
					max={2023}
					step={1}
					marks={{
						2005: 2005,
						2015: "2015년식",
						2023: 2023,
					}}
					value={value}
					pushable={true}
					onChange={onSliderChange}
				/>
			</div>
			{value[1] === 210000 ? (
				<div>{`${value[1]}년식 ~`}</div>
			) : value[1] === 100 ? (
				<div>{`0km~`}</div>
			) : (
				<div>{`${value[0]}년식 ~ ${value[1]}년식`}</div>
			)}
		</div>
	);
}
