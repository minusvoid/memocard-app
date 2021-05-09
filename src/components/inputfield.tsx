import { setUncaughtExceptionCaptureCallback } from 'node:process';
import React, { useState, FC} from 'react';
import { setTextRange } from 'typescript';
import { Card } from './types';







const InputField = () => {

    const [ count, setCount ] = useState<number>( 0 );
    const [ title, setTitle ] = useState<string>("Title here");
    const [ discription, setDiscription ] = useState<string>("discription");

    const handleChanege = (e: React.ChangeEvent<HTMLInputElement) => {
        setTitle(e.target.value);
    }

    const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement) => {
        if (e.target.value === 'Enter') {
            setCount(count +1)
            
            const newCard: Card = {
                id: count,
                title: title,
                discription: discription,
                pinned: false,
            }

            addCard([newCard, ...Caeds])
            setTitle("")
            setDiscription("")
        }
    }

        return (
            <div className="inputField">
                <input className="" type="text" value={title} onChange={handleChanege} onKeyDown={handleKeyDown} />
            </div>
        );
};

export default InputField;