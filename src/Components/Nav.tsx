import React from "react";

import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Nav() {
    const [isHovered, setIsHovered] = React.useState(false);


  return (
    <nav style={{
        width: '100%',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        padding: '3px',
        paddingInline: '20px'
    }}>
        <Link to="/" 
        style={{
            display: 'flex',
            alignItems:'center',
            gap: '2px',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: '#ff5a5f'
        }}>
            <FaAirbnb style={{
                fontSize: '2.25rem'
            }} />
            <span>airbnb</span>
        </Link>

        <ul style={{
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            gap: '10px',
            listStyle: 'none',
            
        }}>
            <li style={{fontWeight: 'bold', color : '#484848'}}>
                <a href="#">Logements</a>
            </li>
            <li style={{color : '#484848'}}>
                <a href="#">Expériences</a>
            </li>
            <li style={{ color : '#484848'}}>
                <a href="#">Expériences en ligne</a>
            </li>
        </ul>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
        }}>
            <a href="#"><TbWorld style={{fontSize: '1.5rem'}}/></a>
            <div 
            
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                border: '1px solid rgb(237, 237, 237)',
                padding: '8px',
                borderRadius: '20%',
                cursor: 'pointer',
                boxShadow: isHovered ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : ''
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <IoIosMenu style={{fontSize: '1.25rem'}}/>
                <FaRegCircleUser style={{fontSize: '1.5rem'}}/>
            </div>
        </div>
    </nav>
  )
}
