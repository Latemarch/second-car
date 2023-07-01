import SideBar from "@/components/SideBar";

export default function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex w-full max-w-7xl mx-auto">
			<SideBar />
			<div>{children}</div>
		</div>
	);
}
