import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
	users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
	return (
		<>
			<Head>
				<title>Users Page</title>
			</Head>
			<Header />
			<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h1 className="text-3xl font-bold mb-8">Our Users</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{users.map((user) => (
						<UserCard
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
							address={user.address}
							phone={user.phone}
							website={user.website}
						/>
					))}
				</div>
			</main>
		</>
	);
}

export async function getStaticProps() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const users = await response.json();

		return {
			props: {
				users,
			},
			revalidate: 60, // Regenerate page every 60 seconds
		};
	} catch (error) {
		console.error("Error fetching users:", error);
		return {
			props: {
				users: [],
			},
		};
	}
}
