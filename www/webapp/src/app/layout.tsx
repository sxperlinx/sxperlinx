import { Children } from '@/lib/props';
import { Element } from '@/lib/types';
import Meta from '@/lib/meta.config';
import type { Metadata } from 'next';
import '@/ui/css/globals.css';

const geistSans = Meta.fonts.sans;
const geistMono = Meta.fonts.mono;

export const metadata: Metadata = Meta.metadata;

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang={Meta.lang}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
