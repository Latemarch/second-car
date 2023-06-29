import { toDate, withCommas } from "@/utils/utils";
import FavIcon from "./FavIcon";

const imgDomain = "https://ci.encar.com/carpicture";
type Props = {
	[key: string]: any;
};
export default function ProductCard({ product }: Props) {
	console.log(`${imgDomain}${product.Photo}`);
	const { Price, Photo, Year, Manufacturer, Badge, FuelType, Model, Mileage } =
		product;
	return (
		<div className="bg-gray-50 p-2 pt-4 max-w-[400px] drop-shadow-sm rounded-lg">
			<div className="flex pb-2 justify-between items-center">
				<h1 className="text-lg">{`${Manufacturer}(${Model})`}</h1>
				<FavIcon />
			</div>
			{/*  eslint-disable-next-line @next/next/no-img-element*/}
			<img
				src={`${imgDomain}${Photo}001.jpg`}
				alt="car"
				className="w-full rounded-md"
			/>
			<div className="flex justify-between my-2">
				<div className="flex flex-col items-start ">
					<p>{toDate(Year)}</p>
					<p>{withCommas(Mileage)} km</p>
				</div>
				<div>
					<p className="text-end">{Badge}</p>
					<p className="text-end">{FuelType}</p>
				</div>
			</div>
			<div className="flex justify-end text-2xl">
				<p>{withCommas(Price)}만원</p>
			</div>
		</div>
	);
}
