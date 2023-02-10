import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coins from './Coins';
import Coin from './Coin';

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
    return (
        <BrowserRouter>
            {/* switch는 router v5에서만 사용 */}
            {/* router v6에서는 routes사용 */}
            <Switch>
                <Route path="/:coinId">
                    <Coin isDark={isDark} />
                </Route>
                <Route path="/">
                    <Coins toggleDark={toggleDark} />
                </Route>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Router;