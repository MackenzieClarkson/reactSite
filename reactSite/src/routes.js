import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const siteInfo = React.lazy(() => import('./views/siteInfo/siteInfo'));
const playground = React.lazy(() => import('./views/playground/playground'));
const asteroidTracker = React.lazy(() => import('./views/Asteroid/asteroidTracker'));
const apod = React.lazy(() => import('./views/APOD/apod'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/apod', name: 'apod', component: apod },
  { path: '/asteroidTracker', name: 'Asteroid Tracker', component: asteroidTracker },
  { path: '/playground', name: 'playground', component: playground },
  { path: '/siteInfo', exact: true,  name: 'siteInfo', component: siteInfo},
];

export default routes;
