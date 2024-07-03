import React, { useState } from 'react';
import TokenSelector from './components/TokenSelector';
import QuoteDisplay from './components/QuoteDisplay';
import TransactionParams from './components/TransactionParams';
import { fetchQuote, createTransaction } from './utils/api';

const App = () => {
    const [selectedToken, setSelectedToken] = useState(null);
    const [quote, setQuote] = useState(null);
    const [transactionParams, setTransactionParams] = useState(null);

    const handleTokenSelect = async (token) => {
        setSelectedToken(token);
        const fetchedQuote = await fetchQuote(token.id, 'ethereum');
        setQuote(fetchedQuote);
    };

    const handleConfirm = async (quoteId) => {
        const params = await createTransaction(quoteId);
        setTransactionParams(params);
    };

    return (
        <div>
            <h1>Bridge Application</h1>
            {!selectedToken && <TokenSelector onSelect={handleTokenSelect} />}
            {quote && !transactionParams && <QuoteDisplay quote={quote} onConfirm={handleConfirm} />}
            {transactionParams && <TransactionParams params={transactionParams} />}
        </div>
    );
};

export default App;