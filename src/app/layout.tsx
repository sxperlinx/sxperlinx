import { Children } from '@/lib/props';
import { Element } from '@/lib/types';
import type { Metadata } from 'next';
import fonts from '@/config/font';
import Meta from '@/config/meta';
import '@/ui/css/globals.css';

export const metadata: Metadata = Meta.data;

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang={Meta.lang}>
			<body className={`${fonts.sans} ${fonts.mono} antialiased`}>
				{children}
			</body>
		</html>
	);
}
