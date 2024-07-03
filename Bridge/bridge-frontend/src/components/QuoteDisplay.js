import React from 'react';

const QuoteDisplay = ({ quote, onConfirm }) => (
    <div>
        <h2>Quote</h2>
        <p>Token: {quote.token}</p>
        <p>Chain: {quote.chain}</p>
        <p>Price: {quote.price}</p>
        <button onClick={() => onConfirm(quote.id)}>Confirm</button>
    </div>
);

export default QuoteDisplay;