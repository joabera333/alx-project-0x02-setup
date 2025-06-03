import { type PostProps } from "@/interfaces";

const PostCard = ({ title, body, userId }: PostProps) => {
	return (
		<div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
			<h2 className="text-xl font-bold mb-2 line-clamp-1">{title}</h2>
			<p className="text-gray-600 mb-4 line-clamp-3">{body}</p>
			<div className="flex items-center text-sm text-gray-500">
				<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
					User ID: {userId}
				</span>
			</div>
		</div>
	);
};

export default PostCard;
