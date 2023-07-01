import Header from "@/components/Header";
import "./globals.css";
import { Anek_Latin } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const orbit = Anek_Latin({
	//
	preload: false,
	weight: ["400"],
});

export const metadata = {
	title: "세계 자동차",
	description: "수원 중고차 매매 플랫폼: 내차팔기, 내차사기, 내차교환",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="kr">
			<div>
				<body className={orbit.className}>
					<div className="fixed inset-0">
						<div className="max-w-7xl w-full h-full mx-auto "></div>
					</div>
					<main className="flex relative">
						<div className="flex flex-col w-full ">
							<ReduxProvider>
								<Header />
								<div className="w-full">{children}</div>
							</ReduxProvider>
						</div>
					</main>
					<Footer />
				</body>
			</div>
		</html>
	);
}
