import React from 'react';

const TransactionParams = ({ params }) => (
    <div>
        <h2>Transaction Parameters</h2>
        <p>From: {params.from}</p>
        <p>To: {params.to}</p>
        <p>Gas: {params.gas}</p>
    </div>
);

export default TransactionParams;