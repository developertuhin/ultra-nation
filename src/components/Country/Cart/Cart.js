import React from 'react';

const Cart = (props) => {   
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum,country) => sum + country.population, 0);
    return (
        <div style={{borderBottom:'3px dotted blue', margin:'30px'}}>
            <h3>Total Population: {totalPopulation}</h3>
        </div>
    );
};

export default Cart;