import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';
import { Helmet } from 'react-helmet-async';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from './atoms';

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
    background-color: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};    
    margin-bottom: 10px;
    border-radius: 15px;
    border: 1px solid white;

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

interface ICoinsProps {
    
}

function Coins({ }: ICoinsProps) {
    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {

    //     (async () => {
    //         const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await response.json();
    //         //console.log(json.slice(0, 100));
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();

    // },[])
    const { isLoading, data } = useQuery<CoinInterface[]>(["allCoins"], fetchCoins);

    console.log("isLoading", isLoading);
    console.log("data", data);

    const setDarkAtom =  useSetRecoilState(isDarkAtom)
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

    return (
        <Container>
            <Helmet>
                <title>
                    코인
                </title>
            </Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDarkAtom}>테마 변경</button>
            </Header>
            {isLoading ? <Loader>Loading...</Loader> : <CoinList>
                {data?.slice(0, 100).map((coin) => (
                    <Coin key={coin.id}>
                        <Link 
                            to={{
                                pathname: `/${coin.id}`,
                                state: {name: coin.name}
                            }}
                        >
                            <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt={coin.name} />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinList>}
        </Container>
    );
}

export default Coins;