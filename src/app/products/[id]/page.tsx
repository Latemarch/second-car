import ImgContainer from "@/components/ProductDetail/ImgContainer";
import ProductDescription from "@/components/ProductDetail/ProductDescription";
import ProductHeader from "@/components/ProductDetail/ProductHeader";
import ProductOptions from "@/components/ProductDetail/ProductOptions";
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
	return {
		title: `세계자동차 | ${product.Model}`,
		description: `${product.BadgeDetail} 등급의 ${product.FormYear}년식 ${product.Modal}`,
	};
}

export default async function Product({ params: { id } }: Props) {
	const product = await getCarById(id);
	const { Photo, Photos } = product;

	return (
		<div>
			<ProductHeader product={product} />
			<ImgContainer images={{ Photo, Photos }} />
			<ProductDescription product={product} />
		</div>
	);
}
