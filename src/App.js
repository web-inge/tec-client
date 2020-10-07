import React from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from './views/login/actions'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './config/routing/routes';
import AppRoute from './config/routing/appRouting';

function App({count, increaseCounter, decreaseCounter}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({path, component, isPrivate}) => <AppRoute
            key={path}
            path={path}
            component={component}
            isPrivate={isPrivate}
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
