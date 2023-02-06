

export function fetchCoins(){
    return fetch("https://api.coinpaprika.com/v1/coins").then((response) => response.json()
    );
    // const json = await response.json();
    // return json
}