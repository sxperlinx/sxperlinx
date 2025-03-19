import { geistMono, geistSans } from '@/ui/fonts';
import { Metadata } from 'next';

export default class Meta {
	static lang = 'en';

	static metadata: Metadata = {
		title: {
			template: '%s | www',
			default: 'www',
		},
		description: 'www',
	};

	static fonts = {
		sans: geistSans,
		mono: geistMono,
	};
}
