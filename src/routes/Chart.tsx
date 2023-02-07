import React from 'react';
import { useParams } from 'react-router';

function Chart() {
    const parmas = useParams();
    console.log("parmas", parmas)
    return (
        <div>
            차트
        </div>
    );
}

export default Chart;