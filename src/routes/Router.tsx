import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coins from './Coins';
import Coin from './Coin';

function Router() {
    return (
        <BrowserRouter>
            {/* switch는 router v5에서만 사용 */}
            {/* router v6에서는 routes사용 */}
            <Switch>
                <Route path="/:coinId">
                    <Coin/>
                </Route>
                <Route path="/">
                    <Coins/>
                </Route>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Router;