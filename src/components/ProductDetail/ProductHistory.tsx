import { AiOutlineCheckCircle } from "react-icons/ai";

export default function ProductHistory({ product }: { product: any }) {
	return (
		<div className="flex flex-col">
			<h1 className="text-lg my-6 w-2/3 border-b-4 border-accent pb-1">
				성능점검 / 보험이력
			</h1>
			<div className="grid grid-cols-2 gap-10">
				<div className="">
					<h2>성능 점검</h2>
					<p className="text-sm">
						{product.FormYEar}년식 {product.Model}은 출고 이후 이력 중 아래와
						같이 주요 이력이 있습니다.
					</p>
					<div className="flex flex-col my-4">
						<div>
							<div className="flex items-center gap-4 p-2">
								<AiOutlineCheckCircle />
								<p>2번의 명의 변경</p>
							</div>
							<div className="flex items-center gap-4 p-2">
								<AiOutlineCheckCircle />
								<p>전손이력 : 없음 </p>
							</div>
							<div className="flex items-center gap-4 p-2">
								<AiOutlineCheckCircle />
								<p>침수이력 : 없음</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2>보험 이력</h2>
					<p className="text-sm">
						2023.05.21일 시행된 성능검사를 토대로 {product.Model}의 특이점들을
						요약했습니다.
					</p>
					<div className="flex flex-col my-4">
						<div>
							<div className="flex items-center gap-4 p-2">
								<AiOutlineCheckCircle />
								<p>5번의 보험 이력</p>
							</div>
							<div className="flex items-center gap-4 p-2">
								<AiOutlineCheckCircle />
								<p>내차피해 : 2,231,200원</p>
							</div>
							<div className="flex items-center gap-4 p-2">
								<AiOutlineCheckCircle />
								<p>타차피해 : 3,201,300원 </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
