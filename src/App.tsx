import React, { useState } from 'react';
import { Card } from './components/types'
import CardInput from './components/cardinput';
import CardList from './components/cardlist';

const initialState: Card[] = [
	{
		id: 2,
		title: 'Title 2',
		discription: 'Discriptions',
		pinned: false,
	},{
		id: 1,
		title: 'Title 1',
		discription: 'disciptions',
		pinned: true,
	}
]

const App: React.FC =() => {
	const [ cards, setCards ] = useState(initialState)

	return (
		<div>
			<CardInput addCards={setCards} cards={cards} />
			<CardList addCards={setCards} cards={cards} />
		</div>
	)
}

export default App;