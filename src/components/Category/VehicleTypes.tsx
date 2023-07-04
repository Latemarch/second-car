import VehicleType from "./VehicleType";

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
				<VehicleType key={type} type={type} />
			))}
		</ul>
	);
}
