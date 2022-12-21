import { useRef, useState } from "react"
import Input from "../../utils/Input/Input"
import classes from './MealForm.module.css'



const MealForm = (props) => {
    const amountInputRef = useRef();
    const [isValid, setIsValid] = useState(true);

    const submitItem = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setIsValid(false);
            return
        }
        setIsValid(true);
        props.onAddToCart(enteredAmountNum)
    }

    return (
        <form type="submit" className={classes.form} onSubmit={submitItem}>
            <Input
                ref={amountInputRef}
                label="amount"
                type="number"
                input={{
                    id: '3',
                    type: 'number',
                    min: 0,
                    step: 1,
                    defaultValue: 1
                }} />
            <button type="submit" >Add to cart</button>
            {!isValid && <p>Invalid value</p>}
        </form>
    )
}

export default MealForm