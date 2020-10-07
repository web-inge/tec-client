import React from 'react'
import { Route } from 'react-router-dom'

export default function AppRoute({
  component: Component,
  path,
  isPrivate,
  isExact,
  ...props
}) {
  return (
    <Route
      path={path}
      exact={isExact}
      render={(props) =>
        isPrivate && true ? <div>Login please</div> : <Component {...props} />
      }
    />
  )
}
