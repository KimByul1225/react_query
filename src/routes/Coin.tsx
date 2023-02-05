import React from 'react';
import { useParams } from 'react-router';

interface RouteParams {
    coinId: string;
} 

function Coin() {
    const {coinId} = useParams<RouteParams>();
    return (
        <div>
            <h2>세부페이지</h2>
            <h3>{coinId}</h3>
        </div>
    );
}

export default Coin;