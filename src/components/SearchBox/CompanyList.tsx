"use client";

import { getCompanyList } from "@/utils/clientSideFetch";
import { useEffect, useState } from "react";
import SelectionButton from "./SelectionButton";

export default function CompanyList() {
	const [companies, setCompanies] = useState<any>({});
	useEffect(() => {
		const fetchData = async () => {
			const companyList = await getCompanyList();
			setCompanies(companyList);
		};
		fetchData();
	}, []);

	return (
		<>
			{["국산차", "수입차"].map((category: string) => (
				<div
					key={category}
					data-name={category}
					className="flex w-full flex-col items-start"
				>
					<p className="w-2/3 mb-2 text-start border-b-2 border-accent ">
						{category}
					</p>
					<div className="flex flex-wrap gap-4">
						{companies[category]?.map((company: string) => (
							<SelectionButton
								key={company}
								value={company}
								category={"manufacturer"}
							/>
						))}
					</div>
				</div>
			))}
		</>
	);
}
