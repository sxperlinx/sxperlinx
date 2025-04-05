import React, {
	ForwardRefExoticComponent,
	RefAttributes,
	SVGProps,
} from 'react';

export type Props<T> = {
	[key: string]: T;
};

export type Element = React.JSX.Element;

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

export type CardRatio =
	| '1:1'
	| '1:2'
	| '1:3'
	| '2:1'
	| '2:2'
	| '2:3'
	| '3:1'
	| '3:2'
	| '3:3';

export type Card = {
	title: string;
	description?: string;
	href: string;
	icon: Icon;
	ratio: CardRatio;
};
