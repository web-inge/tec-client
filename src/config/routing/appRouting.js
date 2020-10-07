// @flow
import React from 'react';
import { Route } from 'react-router-dom';

type Props = {
    component: any,
    path: string,
    isPrivate: boolean,
    isExact: boolean,
};

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
