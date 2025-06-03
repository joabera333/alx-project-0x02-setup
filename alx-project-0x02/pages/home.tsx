import React from "react";

const HomePage: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-blue-600">
				Welcome to our Home Page
			</h1>
			<p className="mt-4 text-gray-700">
				This is the main page of our application.
			</p>
		</div>
	);
};

export default HomePage;
