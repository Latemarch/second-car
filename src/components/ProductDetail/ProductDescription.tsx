import ProductSidebar from "./ProductSidebar";
import ProductHistory from "./ProductHistory";
import ProductOptions from "./ProductOptions";

export default function ProductDescription({ product }: { product: any }) {
	return (
		<div className="w-full">
			<div className="w-full max-w-7xl flex gap-10 mx-auto border-b shadow-sm sticky top-0 bg-white">
				<button className="p-4">기본정보</button>
				<button className="p-4">성능/보험</button>
				<button></button>
			</div>
			<div className="p-6 sm:flex flex-row-reverse justify-between w-full max-w-7xl mx-auto ">
				<div className="w-full sm:w-1/3 md:w-72">
					<ProductSidebar />
				</div>
				<div className="flex flex-col sm:w-2/3 mr-6 gap-20">
					<ProductHistory product={product} />
					<ProductOptions product={product} />
				</div>
			</div>
		</div>
	);
}
