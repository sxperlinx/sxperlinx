import { Card as CardData, Element } from '@/lib/types';
import cn, { fromRatio } from '@/lib/utils';
import Link from 'next/link';
import { cards } from '@/ui';

export function Card({ card }: { card: CardData }): Element {
	const Icon = card.icon;

	return (
		<div
			className={cn(
				fromRatio(card.ratio),
				'default-border text-bg bg-fg rounded-md shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg',
			)}
		>
			<Link
				href={card.href}
				className='flex size-full flex-col p-4'
			>
				<div className='mb-4 flex flex-row items-center justify-start gap-2'>
					<Icon className='size-6' />
					<h2>{card.title}</h2>
				</div>
				<p>{card.description}</p>
			</Link>
		</div>
	);
}

export function CardWrapper(): Element {
	return (
		<div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-4'>
			{cards.map((card) => {
				return (
					<Card
						key={card.title}
						card={card}
					/>
				);
			})}
		</div>
	);
}
