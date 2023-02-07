import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchCoinHistory } from '../api';
import ApexChart from "react-apexcharts";

interface IHistorycal {
    time_open: string;
    time_close: string,
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

function Chart({coinId}: ChartProps) {
    const{ isLoading, data } = useQuery<IHistorycal[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    console.log("data", data);

    const closeData = data?.map(price => Number(price.close)) as number[];
    //const closeData = data?.map(price => Number(price.close)) as number[];

    console.log("closeData", closeData);
    return (
        <div>
            {
                isLoading? "Loading..." 
                : 
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
                        theme:{
                            mode: "dark",
                        },
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
                            }
                        }
                    }}
                />
            }
            
        </div>
    );
}

export default Chart;