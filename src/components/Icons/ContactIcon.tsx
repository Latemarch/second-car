import { AiFillFacebook } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GrFacebook } from "react-icons/gr";

export default function ContactIcon({ name }: { name: string }) {
	return (
		<>
			{name === "kakao" && (
				<div className="bg-contactIcon p-2 rounded-md">
					<RiKakaoTalkFill size={30} color="white" />
				</div>
			)}

			{name === "phone" && (
				<div className="p-2 rounded-md bg-green-700">
					<FaPhone size={30} color="white" />
				</div>
			)}
			{name === "facebook" && (
				<div className="rounded-md overflow-hidden">
					<GrFacebook size={45} color="#336FC9" />
				</div>
			)}
		</>
	);
}
