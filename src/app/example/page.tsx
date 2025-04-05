import { Element } from '@/lib/types';
import Link from 'next/link';

export default function Example(): Element {
	return (
		<div>
			<h1>Example</h1>
			<Link href='/'>Back</Link>
		</div>
	);
}
