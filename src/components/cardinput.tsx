import React, { useState } from 'react';
import { Card } from './types';

type Props = {
	cards: Card[]
	addCards: React.Dispatch<React.SetStateAction<Card[]>>
}

const CardInput: React.FC<Props> = ({ addCards, cards}) => {
	const [ inputTitle, setInputTitle ] = useState<string>('')
	const [ count, setCount ] = useState<number>( cards.length +1 )

	const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
		setInputTitle( e.target.value )
	}

	const handleSubmit = () => {
		setCount( count +1 )

		const newCard: Card ={
			id: count,
			title: inputTitle,
			pinned: false,
		}

		addCards([ newCard, ... cards ])
		setInputTitle('')
	}

	return (
		<div>
			<div className="imputForm">
				<div className="inner">
					<input
						type="text"
						className="input"
						value={inputTitle}
						onChange={handleInputChange}
					/>
					<button onClick={handleSubmit} className="btn is-primary">
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default CardInput;