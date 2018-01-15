import React from 'react';
import {  Route,  IndexRedirect } from 'react-router';
import PT from './game_list/pt';   //PT游戏
import GG from './game_list/gg';   //BBIN游戏
import GPI from './game_list/gpi'; // GPI游戏
import MG from './game_list/mg'; // MG游戏
import TGP from './game_list/tgp'; // PT游戏
import TTG from './game_list/ttg'; // PT游戏
import {requireAuthentication} from '../../route/requireAuthentication';
require('./css/style.css')

var gameRouter = (
    <Route>
        <IndexRedirect to="/pt.html" />
        <Route path="/pt.html" component={requireAuthentication(PT)} />
        <Route path="/gg.html" component={requireAuthentication(GG)} />
        <Route path="/gpi.html" component={requireAuthentication(GPI)} />
        <Route path="/mg.html" component={requireAuthentication(MG)} />
        <Route path="/tgp.html" component={requireAuthentication(TGP)} />
        <Route path="/ttg.html" component={requireAuthentication(TTG)} />
    </Route>
);

export default gameRouter;