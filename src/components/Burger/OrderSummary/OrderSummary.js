import React from 'react';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return  (
                <li key = {igKey}>
                    <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return(
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button  clicked = {props.purchaseCancelled}>CANCEL</Button>
            <Button  clicked = {props.purchaseContinued}>CONTINUE</Button>
        </div>
    )
};


export default orderSummary;