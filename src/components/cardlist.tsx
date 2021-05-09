import React from 'react';
import { Card } from './types';
import CardItem from './carditem';

type Props = {
	cards: Card[]
	addCards:React.Dispatch<React.SetStateAction<Card[]>>
}

const CardList: React.FC<props> = ({ cards, addCards }) => {

	const handlePinned = (card: Card) => {
		addCards( prev => prevmap( t =>
			t.id === card.id
			? { ...card, pimmed: !card.pinned }
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
					{ cards.map( card => (
						<CardItem
							key={card.id}
							card={card}
							handlePinned={handlePinned}
							handleDelete={handleDelete}
						/>
					))	}
				</ul>
			}
		</div>
	)
}

export default CardList;