import ContactIcon from "./ContactIcon";
import VehicleTypes from "./VehicleTypes";
import Category from "./Category";
import Manufacturer from "./Manufacturer";
const divClass =
	"flex justify-between items-center min-h-16 gap-4 px-6  p-2 border-b border-x ";
export default function SideBar() {
	return (
		<aside className="shrink-0 z-20 w-52 rounded-xl mt-20 ml-4 ">
			<div className="sticky z-20 top-20 shadow-md rounded-xl">
				<div className={`${divClass} border-t rounded-t-xl `}>
					<div className="">
						<div className="flex gap-4 pt-2">
							<ContactIcon name={"kakao"} />
							<ContactIcon name={"phone"} />
						</div>
						<p className="text-xl pt-1">010.2929.5959</p>
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
				<div className={divClass}>brand</div>
				<div className={`${divClass} rounded-b-xl`}>내차팔기</div>
			</div>
		</aside>
	);
}
