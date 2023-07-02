import { toDate, withCommas } from "@/utils/utils";
import FavIcon from "./FavIcon";
import Link from "next/link";

const imgDomain = "https://ci.encar.com/carpicture";
type Props = {
	[key: string]: any;
};
export default function ProductCard({ product }: Props) {
	const { Price, Photo, Year, Manufacturer, Badge, FuelType, Model, Mileage } =
		product;
	return (
		<div className="bg-white flex sm:flex-col w-full mx-w-[400px] shadow-sm sm:rounded-lg z-0 cursor-pointer">
			<Link href={`/products/${product.Id}`}>
				<div className="p-2 sm:p-0 flex relative overflow-auto w-1/2 sm:h-full sm:w-full ">
					{/*  eslint-disable-next-line @next/next/no-img-element*/}
					<img
						src={`${imgDomain}${Photo}001.jpg`}
						alt="car"
						className="w-full h-full rounded-sm md:rounded-t-md object-center"
					/>

					{/* <div className="absolute bg-accent m-1">
						<FavIcon />
					</div> */}
				</div>
				<div className="p-2 w-full">
					<div className="mb-2 w-full flex flex-col items-start ">
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
			</Link>
		</div>
	);
}
