import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CV from './CV'; // Adjust the import path if needed
import './index.css';

const App = () => {
  return (
    <Router basename="/luke-howlett-cv">
      <Switch>
        <Route exact path="/" component={CV} />
        <Route path="*" component={() => <div>Page Not Found</div>} />
      </Switch>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
