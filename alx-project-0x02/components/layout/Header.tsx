import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="bg-white shadow-sm">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<div className="text-2xl font-bold text-blue-600">StayFinder</div>
					<nav className="hidden md:flex space-x-6">
						<Link href="/home" className="text-gray-600 hover:text-blue-600">
							Home
						</Link>
						<Link href="/about" className="text-gray-600 hover:text-blue-600">
							About
						</Link>
						<Link href="/" className="text-gray-600 hover:text-blue-600">
							Listings
						</Link>
					</nav>
					<div className="flex space-x-4">
						<button className="px-4 py-2 text-gray-600 hover:text-blue-600">
							Sign In
						</button>
						<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
							Sign Up
						</button>
					</div>
				</div>

				{/* Rest of your header content (search bar, filters, etc.) */}
			</div>
		</header>
	);
};

export default Header;
