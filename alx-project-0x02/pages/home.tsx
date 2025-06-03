/*import React from "react";

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
*/
import Card from "@/components/common/Card";
import Head from "next/head";

export default function Home() {
	return (
		<div className="min-h-screen p-8">
			<Head>
				<title>Home Page</title>
				<meta name="description" content="Home page with card examples" />
			</Head>

			<h1 className="text-3xl font-bold mb-8">Card Component Examples</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card
					title="First Card"
					content="This is the content for the first card component."
				/>

				<Card
					title="Second Card"
					content="Different content for the second card example."
					className="bg-blue-50 border-blue-200"
				/>

				<Card
					title="Third Card"
					content="Yet another example of card content with more details."
					className="bg-green-50 border-green-200"
				/>
			</div>
		</div>
	);
}
