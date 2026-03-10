import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Auth page',
};

export default function AuthPage() {
	return (
		<div>
			Auth page
			<a href="/">home</a>
			<a href="/auth">auth</a>
			<a href="/books/1">books/1</a>
			<a href="/read/1">read/1</a>
			<a href="/search">search</a>
		</div>
	);
}
