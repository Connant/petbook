import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Auth page',
};

export default function AuthPage() {
	return (
		<div>
			Auth page
			<Link href="/">home</Link>
			<Link href="/auth">auth</Link>
			<Link href="/books/1">books/1</Link>
			<Link href="/read/1">read/1</Link>
			<Link href="/search">search</Link>
		</div>
	);
}
