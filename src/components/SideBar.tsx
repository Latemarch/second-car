import ContactIcon from "./ContactIcon";
import { BiWon } from "react-icons/bi";
const divClass = "flex justify-start items-center h-16 border-b gap-4 pl-6";
export default function SideBar() {
	return (
		<aside className="shrink-0 z-20 w-52 border-r">
			<div className="sticky top-0">
				<div className={divClass}>
					<ContactIcon name={"kakao"} />
					<ContactIcon name={"phone"} />
				</div>
				<div className={divClass}>
					<BiWon />
					<p>가격대</p>
				</div>
				<div className={divClass}>brand</div>
				<div className={divClass}>brand</div>
				<div className={divClass}>brand</div>
			</div>
		</aside>
	);
}
