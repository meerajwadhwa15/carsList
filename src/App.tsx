import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CarListPage from '@pages/CarList';
import CarDetailPage from '@pages/CarDetail';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path="/" component={CarListPage} />
            <Route path="/:id" component={CarDetailPage} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </>
  );
};

export default App;
