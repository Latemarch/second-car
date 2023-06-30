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
				banner: `url(/public/images/deutsch.jpeg)`,
			},
			colors: {
				grayish: "#E9E9E9", // 흐린 회색
				bg: "white", // 흐린 회색
				"pale-green": "#F5F6F5", // 연한 녹색
				rose: "#FF7171", // 장미색
				ebony: "#555052", // 칠흑색
				"bright-red": "#F4E0E3", // 밝은 빨강색
				"steel-blue": "#606F92", // 스틸 블루
				cgray: "white", // 차가운 회색
				// cgray: "#CCD9E2", // 차가운 회색
				fav: "#f3d849",
				contactIcon: "#ffb400",
				header: "#4f5d75",
				name: "#4f5d75",
				accent: "#f3d849",
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
