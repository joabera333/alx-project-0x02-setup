export interface CardProps {
	title: string;
	content: string;
	className?: string; // Optional className for custom styling
}

export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	size?: "small" | "medium" | "large";
	shape?: "rounded-sm" | "rounded-md" | "rounded-full";
	className?: string;
	type?: "button" | "submit" | "reset";
}
