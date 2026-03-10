import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;

	return {
		title: `Book ${id}`,
	};
}

export default async function BookPage({ params }: Props) {
	const { id } = await params;

	return (
		<div>
			Book page {id}
			<Link href="/">home</Link>
			<Link href="/auth">auth</Link>
			<Link href="/books/1">books/1</Link>
			<Link href="/read/1">read/1</Link>
			<Link href="/search">search</Link>
		</div>
	);
}
