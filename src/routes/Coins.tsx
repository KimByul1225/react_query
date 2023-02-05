import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const CoinList = styled.ul`
    
`
const Coin = styled.li`
    background-color: #fff;
    color: ${(props)=> props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a{
        transition: color .2s ease-in;
        display: block;
        padding: 20px;
        display: flex;
        align-items: center;

    }
    &:hover{
        a{
            color: ${(props)=> props.theme.accentColor};
        }
    }
`

const Title = styled.h1`
    color: ${props => props.theme.accentColor};
    font-size: 48px;
`

const Loader = styled.div`
    text-align: center;
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            //console.log(json.slice(0, 100));
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();

    },[])

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : <CoinList>
                {coins.map(coin => (
                    <Coin key={coin.id}>
                        <Link 
                            to={{
                                pathname: `/${coin.id}`,
                                state: {name: coin.name}
                            }}
                        >
                            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.name} />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinList>}
        </Container>
    );
}

export default Coins;