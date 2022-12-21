import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButton.module.css'

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [isAnimated, setIsAnimated] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0);

    useEffect(() => {
        if (cartCtx.items.length > 0) {
            setIsAnimated(true)
        }
        const timer = setTimeout(() => {
            setIsAnimated(false)
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [numberOfCartItems])

    const btnClasses = `${classes.button} ${isAnimated && classes.bump}`

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span >Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button >
    )
}

export default HeaderButton;