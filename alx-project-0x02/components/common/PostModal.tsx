import { useState } from "react";

interface PostModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (title: string, content: string) => void;
}

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(title, content);
		setTitle("");
		setContent("");
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-md">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold">Create New Post</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
					>
						&times;
					</button>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 mb-2" htmlFor="title">
							Title
						</label>
						<input
							id="title"
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full p-2 border rounded"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 mb-2" htmlFor="content">
							Content
						</label>
						<textarea
							id="content"
							value={content}
							onChange={(e) => setContent(e.target.value)}
							className="w-full p-2 border rounded min-h-[100px]"
							required
						/>
					</div>

					<div className="flex justify-end gap-2">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PostModal;
