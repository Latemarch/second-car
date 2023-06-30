import { toDate, withCommas } from "@/utils/utils";
import FavIcon from "./FavIcon";

const imgDomain = "https://ci.encar.com/carpicture";
type Props = {
	[key: string]: any;
};
export default function ProductCard({ product }: Props) {
	const { Price, Photo, Year, Manufacturer, Badge, FuelType, Model, Mileage } =
		product;
	return (
		<div className="bg-white  max-w-[400px] drop-shadow-md rounded-lg z-0">
			<div className="flex justify-between items-center"></div>
			<div className="flex relative">
				{/*  eslint-disable-next-line @next/next/no-img-element*/}
				<img
					src={`${imgDomain}${Photo}001.jpg`}
					alt="car"
					className="w-full rounded-t-md "
				/>
				<div className="absolute m-1">
					<FavIcon />
				</div>
			</div>
			<div className="p-2">
				<div className="mb-2 flex flex-col items-start ">
					<h1 className="text-lg text-name">{`${Manufacturer}(${Model})`}</h1>
					<p className="text-name">{Badge}</p>
				</div>
				<div className="flex justify-between ">
					<div className="flex flex-col items-start ">
						<p>{toDate(Year)}</p>
					</div>
					<div>
						<p className="text-end">{FuelType}</p>
					</div>
				</div>
				<div className="flex justify-between gap-4 text-lg ">
					<p className="text-sm ">{withCommas(Mileage)} km</p>
					<p>{withCommas(Price)}만원 </p>
				</div>
			</div>
		</div>
	);
}
