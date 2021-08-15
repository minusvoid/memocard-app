import React from 'react';
import { Card } from './types';

type Props = {
	card: Card
	handlePinned: (card: Card) => void
	handleDelete: (card: Card) => void
}

const CardItem: React.FC<Props> = ({ card, handlePinned, handleDelete }) => {
	return (
		<li className={card.pinned ? 'pinned mb-2' : 'mb-2'}>
			<div className="cardBody flex flex-col border-black border-2 border-solid rounded">
			<div className="cardBar flex flex-row">
				<input type="checkbox"
				className="pin flex"
				onClick={() => handlePinned(card)}
				defaultChecked={card.pinned}
				/>
				<h3 className="cardTitle flex flex-grow">{ card.title }</h3>
				<button
			onClick={() => handleDelete(card)}
			className="deleteButton flex self-end justify-self-end">
				Delete
			</button>
			</div>
			<hr />
			<p className="cardDescription flex flex-grow">{ card.description }</p>
		</div>
		</li>
	)
}

export default CardItem;