/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				grayish: "#E9E9E9", // 흐린 회색
				"pale-green": "#F5F6F5", // 연한 녹색
				rose: "#FF7171", // 장미색
				ebony: "#555052", // 칠흑색
				"bright-red": "#F4E0E3", // 밝은 빨강색
				"steel-blue": "#606F92", // 스틸 블루
				cgray: "#F6F6F6", // 차가운 회색
			},
			fontFamily: {
				han: ["var(--hanSans)"],
				akshar: ["var(--akshar)"],
			},
			borderColor: {
				DEFAULT: "#e9e9e9",
			},
		},
	},
	plugins: [],
};
