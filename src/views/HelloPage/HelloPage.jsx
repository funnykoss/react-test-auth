import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth'
import s from './HelloPage.module.css'

export default function HelloPage ()  {
    const name = useSelector(authSelectors.getUserName)
    const email = useSelector(authSelectors.getEmail)
    
    return (
        <div className={s.helloPage}>
            <h2>Привет, {name}</h2>  
            <h2> Привет,{email}</h2>
        </div>
    )
}

