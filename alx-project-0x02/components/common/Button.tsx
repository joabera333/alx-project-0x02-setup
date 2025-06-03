import { type ButtonProps } from "@/interfaces";

const Button = ({
	children,
	onClick,
	size = "medium",
	shape = "rounded-md",
	className = "",
	type = "button",
}: ButtonProps) => {
	const sizeClasses = {
		small: "px-3 py-1.5 text-sm",
		medium: "px-4 py-2 text-base",
		large: "px-6 py-3 text-lg",
	};

	return (
		<button
			type={type}
			onClick={onClick}
			className={`
        bg-blue-500 hover:bg-blue-600 text-white font-medium
        transition-colors duration-200
        ${sizeClasses[size]}
        ${shape}
        ${className}
      `}
		>
			{children}
		</button>
	);
};

export default Button;
