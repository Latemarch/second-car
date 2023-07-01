"use client";

import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";

export default function DoubleRange() {
	const [value, setValue] = useState<number[]>([0, 100]);

	const onSliderChange = (newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	return (
		<div>
			<div className="p-4">
				<Slider
					range
					min={0}
					max={3100}
					step={100}
					marks={{
						0: 0,
						// 500: 500,
						// 1000: 1000,
						// 1500: 1500,
						// 2000: 2000,
						// 2500: 2500,
						3000: 3000,
					}}
					value={value}
					pushable={true}
					onChange={onSliderChange}
				/>
			</div>
			{value[1] === 3100 ? (
				<div>{`${value[1]}만원 ~`}</div>
			) : value[1] === 100 ? (
				<div>{`전가격`}</div>
			) : (
				<div>{`${value[0]}만원 ~ ${value[1]}만원`}</div>
			)}
		</div>
	);
}
