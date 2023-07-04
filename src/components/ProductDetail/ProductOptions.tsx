import { AiOutlineCheck } from "react-icons/ai";
import { imgDomain } from "../ProductCard";

const options = [
	"스마트키",
	"파워윈도우",
	"자동도어잠금",
	"풀오토에어컨",
	"오토라이트",
	"자동주차시스템",
	"전자식파킹브레이크",
	"HUD",
	"ECM룸밀러",
	"크루즈컨트롤",
	"전동트렁크",
	"핸들열선",
	"무선도어 잠금장치",
	"레인센서와이퍼",
	"스탑앤고",
	"무선충전",
];
export default function ProductOptions({ product }: { product: any }) {
	const imgUrl = imgDomain + product.Photo + product.Photos[1].type;
	return (
		<div>
			<div className="flex-flex-col w-2/3 border-b-4 border-accent pb-1 mb-6">
				<h1>차량 옵션 ({product?.BadgeDetail})</h1>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 text-sm ">
				{options.map((option) => (
					<div className="flex items-center gap-1">
						<AiOutlineCheck color={"green"} />
						{option}
					</div>
				))}
			</div>
		</div>
	);
}
