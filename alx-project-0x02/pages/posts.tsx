/*import Head from "next/head";
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
*/
import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
	posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
	return (
		<>
			<Head>
				<title>Posts Page</title>
			</Head>
			<Header />
			<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{posts.map((post) => (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							body={post.body}
							userId={post.userId}
						/>
					))}
				</div>
			</main>
		</>
	);
}

export async function getStaticProps() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const posts = await response.json();

		return {
			props: {
				posts,
			},
			// Re-generate the page at most once per 10 seconds
			revalidate: 10, // Optional: for Incremental Static Regeneration
		};
	} catch (error) {
		console.error("Error fetching posts:", error);
		return {
			props: {
				posts: [],
			},
		};
	}
}
