import React from 'react';
import { Redirect, Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';

import routerConfigs from './constants/routerConfig';
import { RouterItemType } from './types/types';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact={true} from="/" to="/rh-institution/home" />
        {routerConfigs.map((item: RouterItemType, index: number) => {
          return <Route exact={true} path={`/rh-institution/${item.router}`} component={item.component} key={index} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
