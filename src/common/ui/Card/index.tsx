import type { ReactNode } from "react";

const Card = ({
	children
}: {
	children: ReactNode
}) => {
	return (
		<div className="bg-neutral-900 rounded-xl border border-gray-500 p-8">
			{children}
		</div>
	)
};

export default Card;