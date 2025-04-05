import { Element, Tag as TagData } from '@/lib/types';
import cn from '@/lib/utils';

export default function Tag({ label, color }: TagData): Element {
	return (
		<div
			className={cn(
				'flex w-fit items-center justify-center rounded-lg px-2 text-sm font-medium',
				`bg-${color}`,
			)}
		>
			<span>{label}</span>
		</div>
	);
}
