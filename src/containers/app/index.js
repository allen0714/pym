import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from '../../views/layouts/MainLayout/head';
import Goods from '../../views/goods';

export default function App({ match }) {
  return (
    <div style={{ height: '100%' }}>
      <Head />
      <Switch>
        <Route path={`${match.url}/goods`} component={Goods} />
      </Switch>
    </div>
  );
}
