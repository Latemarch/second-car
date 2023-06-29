import path from "path";
import fs from "fs";

export const cls = (...classnames: string[]) => {
	return classnames.join(" ");
};

export const getCarList = async () => {
	const filePath = path.join(process.cwd(), "public", "datas", "carList.json");
	console.log(filePath);
	const fileContents = fs.readFileSync(filePath, "utf8");
	const cars = JSON.parse(fileContents);

	return cars.SearchResults;
};

export function withCommas(number: number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toDate(number: number) {
	const year = Math.floor(number / 100);
	const month = number % 100;
	const formattedDate = `${year}년 ${month}월`;
	return formattedDate;
}
