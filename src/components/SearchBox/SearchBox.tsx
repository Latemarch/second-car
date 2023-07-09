import SelectionContainer from "./SelectionContainer";

export default async function SearchBox() {
	return (
		<div className="absolute z-50 -top-16 bg-white w-11/12  max-w-3xl rounded-lg drop-shadow-md m-[1px] p-10  ">
			<SelectionContainer />
		</div>
	);
}
