import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchCoinHistory } from '../api';
import ApexChart from "react-apexcharts";
import styled from 'styled-components';


interface IHistorycal {
    time_open: string ;
    time_close: any,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    market_cap: number
}

interface ChartProps{
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const{ isLoading, data } = useQuery<IHistorycal[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId),{
        refetchInterval: 10000,
    });
    console.log("data", data);

    const closeData = data?.map(price => Number(price.close)) as number[];
    const categoryDateData = data?.map(price => new Date(price.time_close * 1000).toUTCString());

    console.log("closeData", closeData);
    return (
        <div>
            {
                isLoading? "Loading..." 
                : 
                <>
                    <ApexChart 
                        type="line"
                        series={[
                            {
                                name: "price",
                                data: closeData
                            },
                            // {
                            //     name: "sales",
                            //     data: [15,10,20,10,5]
                            // }
                        ]}
                        options={{
                            // theme:{
                            //     mode: isDark ? "dark" : "light",
                            // },
                            chart: {
                                height:300,
                                width:500,
                                toolbar:{
                                    show: false
                                },
                                background: "transparnt",
                            },
                            stroke: {
                                curve: "smooth",
                                width: 5,
                            },
                            grid:{
                                show: false,
                            },
                            yaxis:{
                                show: false,
                            },
                            xaxis:{
                                axisTicks: {
                                    show: false,
                                },
                                axisBorder:{
                                    show: false,
                                },
                                labels:{
                                    show: false,
                                    datetimeFormatter: {month: "mmm 'yy"}
                                },
                                type: "datetime",
                                categories: categoryDateData,
                            },
                            fill:{
                                type: "gradient",
                                gradient:{
                                    gradientToColors: ["#0be881"],
                                    stops: [0, 100],
                                },
                            },
                            colors: ["#0fbcf9"],
                            tooltip:{
                                y: {
                                    formatter: (value) => `$ ${value.toFixed(3)}` 
                                }
                            }

                        }}
                    />
                    <BoxWrap>
                        <Box></Box>
                        <Box></Box>
                    </BoxWrap>
                </>
            }
        </div>
    );
}

export default Chart;

const BoxWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Box = styled.div`
    width: 48%;
    height: 150px;
    border: 2px solid #000;
    border-radius: 10px;
    margin-bottom: 20px;
`