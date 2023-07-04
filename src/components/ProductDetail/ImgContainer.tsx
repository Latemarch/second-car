import { imgDomain } from "../ProductCard";

type Photo = {
	type: string;
	location: string;
	ordering: number;
};

type Props = {
	images: { Photo: string; Photos: Photo[] };
};
export default function ImgContainer({ images: { Photo, Photos } }: Props) {
	return (
		<div className="w-full h-full max-w-7xl mx-auto bg-gray-100 ">
			<div className="flex w-full">
				<div className="flex overflow-auto w-1/2">
					<img
						src={`${imgDomain}${Photo}${Photos[0].type}.jpg`}
						alt={`${Photo}${Photos[0].type}`}
					/>
				</div>
				<div className="grid grid-cols-2 w-1/2">
					{Photos.slice(1, 5).map((photo: any) => (
						<div key={photo.ordering} className="overflow-auto ">
							<img
								src={`${imgDomain}${Photo}${photo.type}.jpg`}
								alt={`${Photo}${photo.type}`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
