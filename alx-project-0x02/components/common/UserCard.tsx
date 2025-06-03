import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address, phone, website }: UserProps) => {
	return (
		<div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
			<h2 className="text-xl font-bold mb-2">{name}</h2>
			<p className="text-gray-600 mb-1">
				<span className="font-medium">Email:</span> {email}
			</p>
			<p className="text-gray-600 mb-1">
				<span className="font-medium">Phone:</span> {phone}
			</p>
			<div className="mt-3 p-3 bg-gray-50 rounded">
				<h3 className="font-medium mb-1">Address</h3>
				<p className="text-gray-600 text-sm">
					{address.street}, {address.suite}
				</p>
				<p className="text-gray-600 text-sm">
					{address.city}, {address.zipcode}
				</p>
			</div>
			<a
				href={`http://${website}`}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block mt-3 text-blue-500 hover:underline text-sm"
			>
				Visit Website
			</a>
		</div>
	);
};

export default UserCard;
