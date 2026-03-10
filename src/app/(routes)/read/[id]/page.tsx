import { Metadata } from 'next';

type Props = {
	params: { name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: `Book ${params.name}`,
	};
}

export default function ReadPage() {
	return (
		<div>
			Read page
			<a href="/">home</a>
			<a href="/auth">auth</a>
			<a href="/books/1">books/1</a>
			<a href="/read/1">read/1</a>
			<a href="/search">search</a>
		</div>
	);
}
