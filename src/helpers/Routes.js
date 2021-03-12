import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Bio from '../views/Bio';
import Portfolio from '../views/Portfolio';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Bio}
      />
      <Route
        exact
        path='/portfolio'
        component={Portfolio}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
