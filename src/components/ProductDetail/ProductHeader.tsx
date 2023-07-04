import { withCommas } from "@/utils/utils";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import FavIcon from "../Icons/FavIcon";
import ShareIcon from "../Icons/ShareIcon";

export default function ProductHeader({ product }: { product: any }) {
	return (
		<div className="flex flex-col w-full max-w-7xl mx-auto p-6">
			<Link className="flex items-center gap-1" href="/products">
				<AiOutlineArrowLeft />
				<button>목록으로</button>
			</Link>
			<div>
				<h1 className="text-3xl font-bold mt-4">
					{product.FormYear} {product.Manufacturer} {product.Model}
				</h1>
				<div className="flex gap-3 items-center justify-between ">
					<div className="flex gap-3">
						₩{withCommas(product.Price)}만원
						<p className="text-sm">|</p> {withCommas(product.Mileage)}km
					</div>
					<div className="flex items-center gap-3">
						<FavIcon />
						<ShareIcon />
					</div>
				</div>
			</div>
		</div>
	);
}
