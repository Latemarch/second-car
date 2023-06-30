const types = [
	"경차",
	"소형",
	"중형",
	"대형",
	"SUV",
	"RV",
	"승합차",
	"트럭",
	"특수차",
];
export default function VehicleTypes() {
	return (
		<ul className="pt-2">
			{types.map((type) => (
				<li key={type}>
					<div className="flex items-center mb-4 ">
						<input
							id={type}
							type="checkbox"
							value=""
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 accent-accent "
						/>
						<label
							htmlFor={type}
							className="ml-2 text-sm font-medium text-gray-900 "
						>
							{type}
						</label>
					</div>
				</li>
			))}
		</ul>
	);
}
