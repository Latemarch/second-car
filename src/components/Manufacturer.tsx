import Company from "./Company";

const companies = ["현대", "기아", "르노코리아", "제네시스"];
export default function Manufacturer() {
	return (
		<ul className="pt-2">
			{companies.map((company) => (
				<li key={company}>
					<Company company={company} />
				</li>
			))}
		</ul>
	);
}
