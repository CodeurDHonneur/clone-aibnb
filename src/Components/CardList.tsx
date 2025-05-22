import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCards, setCards } from '../slice/CardSlice'
import data from "../data/data.json"
import Card from "./Card"

export default function CardList() {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    React.useEffect(() => {
        dispatch(setCards(data));
    }, [dispatch]);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
            gap: '1.25rem',               // gap-5
            justifyContent: 'center',     // justify-center
            alignItems: 'center',         // items-center
            padding: '2.5rem',            // p-10
            paddingLeft: '5rem',          // px-20
            paddingRight: '5rem',         // px-20
            borderBottom: '2px solid'     // border-b-2
        }}>
                {
                    cards.map((item) => (
                        <Card key={item.id} {...item} />
                    ))
                }
        </div>
    )
}
