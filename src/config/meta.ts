import { Metadata } from 'next';
import { URL } from 'url';

export default class Meta {
	private static readonly label = 'sxperlinx';
	private static readonly description = 'Github username repository';
	private static readonly baseUrl = 'http://localhost:3000';
	private static readonly title = {
		template: '%s | ' + Meta.label,
		default: Meta.label,
	};

	public static readonly lang = 'en';
	public static readonly data: Metadata = {
		title: Meta.title,
		description: Meta.description,
		metadataBase: new URL(Meta.baseUrl),
	};
}
