import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiSteering2Fill } from "react-icons/ri";
import FixIcon from "../Icons/FixIcon";

const selectionStyle =
	"flex border rounded-md p-2 w-28 w-full justify-between items-center ";
export default function ProductSidebar() {
	return (
		<div className="p-2 flex flex-col rounded-lg   shadow-md border md:w-72">
			<div className="flex flex-col gap-2 text-xs mb-4">
				<div className={selectionStyle}>
					<div className="flex text-md items-center gap-4">
						<LiaShippingFastSolid size={30} />
						<p>탁송</p>
					</div>
				</div>
				<div className={selectionStyle}>
					<div className="flex text-md items-center gap-4">
						<HiOutlineBuildingOffice2 size={30} />
						<p>온라인구매</p>
					</div>
				</div>
				<div className={selectionStyle}>
					<div className="flex text-md items-center gap-4">
						<RiSteering2Fill size={30} />
						<p>오프라인 구매</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-wrap">
				<h2 className="text-lg mb-1">구매 방법 선택</h2>
				<span className="flex overflow-auto text-xs">
					전국 어디든 탁송배송이 가능합니다. (20km~ 거리는 탁송비가 추가될 수
					있습니다.)
				</span>
			</div>
			<button className="w-full p-2 my-2 md:mb-4  bg-accent rounded-md">
				구매 상담하기
			</button>
			<div className="flex sm:flex-col md:flex-row text-xs rounded-md bg-gray-100  p-4 px-4 items-center gap-2">
				<FixIcon />
				<p>20만km 이하 상품들은 1개월 2,000km까지의 보증이 제공됩니다.</p>
			</div>
		</div>
	);
}
