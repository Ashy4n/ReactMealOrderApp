import React from 'react';
import classes from './Header.module.css';
import img from '../Meals/meals.jpg'
import HeaderButton from './HeaderButton';

const Header = (props) => {

    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderButton onClick={props.onShowCart} />
            </header >
            <div className={classes['main-image']}><img src={img} alt="food fiesta"></img></div>
        </>
    )
}

export default Header;