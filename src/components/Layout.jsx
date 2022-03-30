import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
// import ProductViewModal from './ProductViewModal'
import Routess from '../routes/Routess'
import Home from '../pages/Home'
import Product from '../pages/Product'

const Layout = () => {
  return (
    <BrowserRouter>
      {/* <Routes> */}
      <Route render={props => (
        <div>
          <Header {...props} />
          <div className="container">
            <div className="main">
              <Routess />
              {/* <Home /> */}

              {/* <Product /> */}
            </div>
          </div>
          <Footer />
          {/* <ProductViewModal /> */}
        </div>
      )} />
      {/* </Routes> */}
    </BrowserRouter>
  )
}

export default Layout
