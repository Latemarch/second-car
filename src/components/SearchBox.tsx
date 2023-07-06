import { getSelectList } from "@/utils/utils";
import Input from "./Input";

export default async function SearchBox() {
	const selections = await getSelectList();
	return (
		<div className="absolute -top-16 bg-white w-11/12  max-w-3xl rounded-lg drop-shadow-md m-[1px]  ">
			<Input selections={selections} />
		</div>
	);
}
