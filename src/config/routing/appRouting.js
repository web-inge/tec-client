import React from 'react';
import { string, bool, elementType} from 'prop-types';
import { Route } from 'react-router-dom';

export default function AppRoute({
  component: Component,
  path,
  isPrivate,
  isExact,
}: Props) {
  return (
        <Route
            path={path}
            exact={isExact}
            render={() =>
              isPrivate && true ? <div>Login please</div> : <Component />
            }
        />
  );
}

AppRoute.propTypes = {
  component: elementType.isRequired,
  path: string.isRequired,
  isPrivate: bool.isRequired,
  isExact: bool.isRequired
};