export const getCompanyList = async () => {
	const companies = await fetch("/datas/selectList.json").then((res) =>
		res.json()
	);

	const result = {
		국산차: Object.keys(companies["국산차"]),
		수입차: Object.keys(companies["수입차"]),
	};

	return result;
};

export const getModelList = async (company: string) => {
	const data = await fetch("/datas/selectList.json").then((res) => res.json());

	const result = data["국산차"][company]
		? data["국산차"][company]
		: data["수입차"][company];

	return result;
};

export const getSpecificModelList = async (model: string) => {
	return [
		`${model}1 (2010~2014)`,
		`${model}2 (2015~2020)`,
		`${model}3 (2020~)`,
	];
};
