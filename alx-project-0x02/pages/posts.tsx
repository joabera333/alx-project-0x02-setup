import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Posts() {
	return (
		<>
			<Head>
				<title>Posts Page</title>
			</Head>
			<Header />
			<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
				<p className="text-lg">Browse through our collection of posts.</p>
			</main>
		</>
	);
}
