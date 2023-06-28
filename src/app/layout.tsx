import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Comet Car",
	description: "수원 중고차 매매 플랫폼: 내차팔기, 내차사기, 내차교환",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="kr">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
