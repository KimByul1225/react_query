import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router';


const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`
const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loader = styled.div`
    text-align: center;
`



const Title = styled.h1`
    color: ${props => props.theme.accentColor};
    font-size: 48px;
`

interface RouteParams {
    coinId: string;
} 
interface RouteState {
    name: string;
}

function Coin() {
    const {coinId} = useParams<RouteParams>();
    const [loading, setLoading] = useState(true);
    const {state} = useLocation<RouteState>();

    const [info, setInfo] = useState({});
    const [priceInfo, setPriceInfo] = useState({});


    useEffect(() => {
        (async () => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            
            const priceData = await(
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            console.log("priceData", priceData);
            setInfo(infoData);
            setPriceInfo(priceData);
            setLoading(false);
        })();
    },[])

    return (

        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null
            
            }
        </Container>

    );
}

export default Coin;