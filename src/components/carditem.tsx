import React from 'react';
import { Card } from './types';

type Props = {
	card: Card
	handlePinned: (card: Card) => void
	handleDelete: (card: Card) => void
}

const CardItem: React.FC<Props> = ({ card, handlePinned, handleDelete }) => {
	return (
		<li className={card.pinned ? 'pimmed' : ''}>
			<label>
				<input type="checkbox"
				className="checkbox-input"
				onClick={() => handlePinned(card)}
				defaultChecked={card.pinned}
				/>
				<span className="checkbox-label">{ card.title }</span>
			</label>
			<button
			onClick={() => handleDelete(card)}
			className="btn delete">
				Delete
			</button>
		</li>
	)
}

export default CardItem;