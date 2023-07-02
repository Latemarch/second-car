import { getCarById, getCarList } from "@/utils/utils";

type Props = {
	params: { id: string };
};
export async function generateStaticParams() {
	const products = await getCarList();
	return products.slice(0, 18).map((product: any) => ({
		id: product.id,
	}));
}

export async function generateMetadata({ params: { id } }: Props) {
	const product = await getCarById(id);
	console.log(product);
	return {
		title: product.Model,
		description: `${product.BadgeDetail} 등급의 ${product.FormYear}년식 ${product.Modal}`,
	};
}

export default async function Product({ params: { id } }: Props) {
	const product = await getCarById(id);

	return <div>{product.Id}</div>;
}
