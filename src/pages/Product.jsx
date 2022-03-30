import React from 'react'
import Helmet from '../components/Helment'
import Section, { SectionBody, SectionTitle } from "../components/Section"
import productData from '../assets/fake-data/products'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

const Product = (props) => {

  const product = productData.getProductBySlug(props.match.params.slug)

  const relatedProducts = productData.getProducts(8)

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          {
            product.title
          }
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Khám phá thêm
        </SectionTitle>
        <SectionBody>
          <Grid>
            {
              relatedProducts.map
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Product