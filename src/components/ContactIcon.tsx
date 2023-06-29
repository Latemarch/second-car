import { FaPhone } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function ContactIcon({ name }: { name: string }) {
	return (
		<>
			{name === "kakao" && (
				<div className="bg-bright-red p-2 rounded-md">
					<RiKakaoTalkFill size={30} color="#443037" />
				</div>
			)}

			{name === "phone" && (
				<div className="p-2 rounded-md bg-bright-red">
					<FaPhone size={30} color="" />
				</div>
			)}
		</>
	);
}
