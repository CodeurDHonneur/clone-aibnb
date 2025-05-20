import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
    const [isHovered, setIsHovered] = React.useState(false);
    
    
    const navigationValue = [
        {id: 0, paragraph: 'Destination', span: 'Recherchez une destination'},
        {id: 1, paragraph: 'Départ', span: 'Quand ?'},
        {id: 2, paragraph: 'Arrivée', span: 'Quand ?'},
        {id: 3, paragraph: 'Voyageur', span: 'Ajouter un voyageur'}
    ]

    return (
        <div style={{
            borderBottom: '2px solid',
            paddingBottom: '1.25rem',
        }}>
            <div style={{
                width: '670px',
                margin: '0 auto',
                border: '1px solid #e2e8f0',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                gap: '3px',
                overflow: 'hidden',
                borderRadius: '40px',
                display: 'flex',
                justifyContent: 'space-around'
            }}>

            {navigationValue.map(value => (
                 <button
                    key={value.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginBlock: '10px',
                        backgroundColor: isHovered ? ' #e2e8f0' : 'white',
                        borderRadius: isHovered ? '40px' : '',
                        border: 'none',
                        // marginLeft: '20px',
                        padding: '15px'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <p style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBlock: '2px' }}>{value.paragraph}</p>
                    <span style={{ fontSize: '0.875rem' }}>{value.span}</span>
                </button>
            ))}
               
                <button style={{
                    borderRadius: '40px',
                    backgroundColor: '#ff5a5f'
                }}>
 
                </button>
            </div>
        </div>
    )
}
