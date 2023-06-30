import { FaPhone } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function ContactIcon({ name }: { name: string }) {
	return (
		<>
			{name === "kakao" && (
				<div className="bg-contactIcon p-2 rounded-md">
					<RiKakaoTalkFill size={30} color="white" />
				</div>
			)}

			{name === "phone" && (
				<div className="p-2 rounded-md bg-contactIcon">
					<FaPhone size={30} color="white" />
				</div>
			)}
		</>
	);
}
