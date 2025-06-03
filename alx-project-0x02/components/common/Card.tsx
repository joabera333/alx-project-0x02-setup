import { type CardProps } from "@/interfaces"; // Explicit type import

const Card = ({ title, content, className = "" }: CardProps) => {
	return (
		<div className={`border rounded-lg p-4 shadow-sm ${className}`}>
			<h2 className="text-xl font-bold mb-2">{title}</h2>
			<p className="text-gray-600">{content}</p>
		</div>
	);
};

export default Card;
