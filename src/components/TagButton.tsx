export default function TagButton({ name }: { name: string }) {
	return (
		<button className="bg-accent p-2 px-4 rounded-full text-gray-500">
			# {name}
		</button>
	);
}
