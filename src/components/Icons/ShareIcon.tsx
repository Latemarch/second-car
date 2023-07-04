"use client";
import { RiShareBoxLine } from "react-icons/ri";
export default function ShareIcon() {
	const handleCopyClick = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			window.alert("Copied!");
		} catch (err) {
			window.alert("Failed to copy text");
		}
	};
	return (
		<div>
			<RiShareBoxLine size={20} onClick={handleCopyClick} />
		</div>
	);
}
