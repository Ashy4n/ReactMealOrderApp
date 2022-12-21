import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../utils/Modal/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const onAdd = (item) => {
        const itemToAdd = { ...item, amount: 1 }
        cartCtx.addItem(itemToAdd);
    }

    const onRemove = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => {
            return <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={onAdd.bind(null, item)}
                onRemove={onRemove.bind(null, item.id)}
            />
        })}</ul>





    return <>
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span >total amount</span>
                <span >{totalAmount}</span>
            </div >
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}> Close </button>
                {cartCtx.items.length > 0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    </>
}

export default Cart