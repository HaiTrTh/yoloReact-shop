import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Routess = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/catalog/:slug">
        <Product />
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  )
}

export default Routess
