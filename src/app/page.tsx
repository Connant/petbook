import Link from 'next/link';

export default function Home() {
	return (
		<div>
			Home page
			<Link href="/">home</Link>
			<Link href="/auth">auth</Link>
			<Link href="/books/1">books/1</Link>
			<Link href="/read/1">read/1</Link>
			<Link href="/search">search</Link>
		</div>
	);
}
