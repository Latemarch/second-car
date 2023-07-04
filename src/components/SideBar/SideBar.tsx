import ContactIcon from "../Icons/ContactIcon";
import Category from "../Category/Category";
import MileageRange from "../Category/MileageRange";
import VehicleTypes from "../Category/VehicleTypes";
import Manufacturer from "../Category/Manufacturer";
import PriceRange from "../Category/PriceRange";
import YearRange from "../Category/YearRange";
const divClass =
	"flex justify-between items-center min-h-16 gap-4 px-6  p-2 sm:border-b sm:border-x ";
export default function SideBar() {
	return (
		<aside className="w-full shrink-0 z-20 md:w-52 md:rounded-xl mt-20 md:ml-4 ">
			<div className="sticky z-20 top-20 md:shadow-md md:rounded-xl">
				<div className={`${divClass} sm:border-t md:rounded-t-xl `}>
					<div className="">
						<div className="flex gap-4 pt-2">
							<ContactIcon name={"kakao"} />
							<ContactIcon name={"facebook"} />
							<ContactIcon name={"phone"} />
						</div>
						<p className="text-xl text-start pt-1">010.2929.5959</p>
					</div>
				</div>
				{/* <div className={divClass}>
					<p>차종</p>
					<FaAngleRight />
				</div>
				<div className={divClass}>
					<VehicleTypes />
				</div> */}
				<Category name="차종">
					<VehicleTypes />
				</Category>
				<Category name="브랜드">
					<Manufacturer />
				</Category>
				<Category name="가격">
					<PriceRange />
				</Category>
				<Category name="주행거리">
					<MileageRange />
				</Category>
				<Category name="연식">
					<YearRange />
				</Category>
				<div className={`${divClass} md:rounded-b-xl`}>내차팔기</div>
			</div>
		</aside>
	);
}
