import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './config/routing/routes';
import AppRoute from './config/routing/appRouting';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({path, component, isPrivate, isExact}) => <AppRoute
            key={path}
            path={path}
            component={component}
            isPrivate={isPrivate}
            isExact={isExact}
          />)}
        </Switch>
      </Router>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.login,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increment()),

//     decreaseCounter: () => dispatch(decrement()),
//   }
// }

export default App;
