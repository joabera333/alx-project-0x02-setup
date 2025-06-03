/*
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

				
			</div>
		</header>
	);
};

export default Header;
*/
import Link from "next/link";

const Header = () => {
	return (
		<header className="bg-white shadow-sm">
			<nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex space-x-8">
						<Link
							href="/home"
							className="inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium text-gray-900"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-gray-500 hover:text-gray-700"
						>
							About
						</Link>
						<Link
							href="/posts"
							className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-gray-500 hover:text-gray-700"
						>
							Posts
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
