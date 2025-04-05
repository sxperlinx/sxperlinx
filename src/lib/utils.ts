import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CardRatio } from '@/lib/types';

export default function cn(...input: ClassValue[]): string {
	return twMerge(clsx(input));
}

export function fromRatio(ratio: CardRatio): string {
	const [cols, rows] = ratio.split(':').map(Number);
	const width = `col-span-${cols}`;
	const height = `row-span-${rows}`;
	return `${width} ${height}`;
}
