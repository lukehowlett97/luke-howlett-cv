import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CV from './CV'; // Assuming CV is in the same directory, adjust the import path if it's in another directory

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

ReactDOM.render(<App />, document.getElementById('root'));
