import SideBar from "@/components/SideBar";

export default function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<SideBar />
			<div>{children}</div>
		</div>
	);
}
