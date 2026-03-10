import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
	params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { name } = await params;

	return {
		title: `Book ${name}`,
	};
}

export default async function ReadPage({ params }: Props) {
	const { name } = await params;

	return (
		<div>
			Read page {name}
			<Link href="/">home</Link>
			<Link href="/auth">auth</Link>
			<Link href="/books/1">books/1</Link>
			<Link href="/read/1">read/1</Link>
			<Link href="/search">search</Link>
		</div>
	);
}
