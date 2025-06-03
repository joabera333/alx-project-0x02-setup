/*
import React from "react";

const AboutPage: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-blue-600">About Us</h1>
			<p className="mt-4 text-gray-700">
				Learn more about our company and mission.
			</p>
		</div>
	);
};

export default AboutPage;



import Button from "@/components/common/Button";
import Head from "next/head";

export default function About() {
	return (
		<div className="min-h-screen p-8">
			<Head>
				<title>About Page - Button Examples</title>
			</Head>

			<h1 className="text-3xl font-bold mb-8">Button Component Examples</h1>

			<div className="space-y-6">
				<div className="space-x-4">
					<h2 className="text-xl font-semibold mb-2">Size Variations</h2>
					<Button size="small">Small Button</Button>
					<Button size="medium">Medium Button</Button>
					<Button size="large">Large Button</Button>
				</div>

				<div className="space-x-4">
					<h2 className="text-xl font-semibold mb-2">Shape Variations</h2>
					<Button shape="rounded-sm">Rounded Small</Button>
					<Button shape="rounded-md">Rounded Medium</Button>
					<Button shape="rounded-full">Rounded Full</Button>
				</div>

				<div className="space-x-4">
					<h2 className="text-xl font-semibold mb-2">Combinations</h2>
					<Button size="small" shape="rounded-full">
						Small Pill
					</Button>
					<Button size="large" shape="rounded-sm">
						Large Square
					</Button>
					<Button
						size="medium"
						shape="rounded-full"
						className="bg-green-500 hover:bg-green-600"
					>
						Custom Color
					</Button>
				</div>
			</div>
		</div>
	);
}

*/

import Head from "next/head";
import Header from "@/components/layout/Header";

export default function About() {
	return (
		<>
			<Head>
				<title>About Page</title>
			</Head>
			<Header />
			<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h1 className="text-3xl font-bold mb-6">About Us</h1>
				<p className="text-lg">Learn more about our company and mission.</p>
			</main>
		</>
	);
}
