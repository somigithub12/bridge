import React, { useState, useEffect } from 'react';
import { fetchTokens } from '../utils/api';

const TokenSelector = ({ onSelect }) => {
    const [tokens, setTokens] = useState([]);
    const [blockchain, setBlockchain] = useState('ethereum');

    useEffect(() => {
        const loadTokens = async () => {
            try {
                const fetchedTokens = await fetchTokens(blockchain);
                setTokens(fetchedTokens);
            } catch (error) {
                console.error('Error fetching tokens:', error);
            }
        };

        loadTokens();
    }, [blockchain]);

    return (
        <div>
            <h2>Select Token</h2>
            <select onChange={(e) => setBlockchain(e.target.value)}>
                <option value="ethereum">Ethereum</option>
                <option value="bsc">Binance Smart Chain</option>
            </select>
            <ul>
                {tokens.map(token => (
                    <li key={token.id} onClick={() => onSelect(token)}>
                        {token.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TokenSelector;
