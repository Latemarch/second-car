import Company from "./Company";

export default function ManufacturerList({
	manufacturer,
	name,
}: {
	name: string;
	manufacturer: string[];
}) {
	return (
		<div className="flex flex-col">
			<p className="m-2 text-start">{name}</p>
			<ul className="grid grid-cols-2 gap-2 px-2 mb-1">
				{manufacturer.map((company) => (
					<Company key={company} company={company} />
				))}
			</ul>
		</div>
	);
}
