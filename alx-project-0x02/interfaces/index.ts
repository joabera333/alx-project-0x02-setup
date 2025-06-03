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

export interface PostProps {
	id: number;
	title: string;
	body: string;
	userId: number;
}

export interface UserProps {
	id: number;
	name: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
	phone: string;
	website: string;
}
