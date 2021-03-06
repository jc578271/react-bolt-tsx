import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import LoadingSreen from 'components/LoadingScreen';

const HomePage = lazy(() => import('pages/Home'));

export default (
  <Suspense fallback={<LoadingSreen />}>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Suspense>
);
