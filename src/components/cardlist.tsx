import React from 'react';
import { Card } from './types';
import CardItem from './carditem';

type Props = {
	cards: Card[]
	addCards:React.Dispatch<React.SetStateAction<Card[]>>
}

const CardList: React.FC<Props> = ({ cards, addCards }) => {

	const handlePinned = (card: Card) => {
		addCards( prev => prev.map( t =>
			t.id === card.id
			? { ...card, pinned: !card.pinned }
			: t
		))
	}

	const handleDelete = (card: Card) => {
		addCards( prev => prev.filter( t =>
			t.id !== card.id
		))
	}

	return (
		<div className="inner">
			{
				cards.length <= 0 ? 'No Card saved!' :
				<ul className="card-list">
					{
						cards
							.sort((prev, next) => (!prev.pinned && next.pinned) ? 1 : -1)
							.map( card => (
								<CardItem
									key={card.id}
									card={card}
									handlePinned={handlePinned}
									handleDelete={handleDelete}
								/>
							))
					}
				</ul>
			}
		</div>
	)
}

export default CardList;