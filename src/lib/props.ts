import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export type Children = Readonly<{ children: React.ReactNode }>;

export type Icon = ForwardRefExoticComponent<
	Omit<SVGProps<SVGSVGElement>, 'ref'> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;
export type NavLink = {
	name: string;
	href: string;
	icon: Icon;
};
