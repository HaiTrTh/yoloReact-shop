import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routess = () => {
  return (
    <Switch>
      {/* <Route path='/' exact element={<Home />} />
      <Route path='/catalog/:slug' element={<Product />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cart' element={<Cart />} /> */}

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

    </Switch>
  )
}

export default Routess
