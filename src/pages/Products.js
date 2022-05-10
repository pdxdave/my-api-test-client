import React from 'react'
import ProductList from '../components/ProductList'
import styled from 'styled-components'

const Products = () => {
  return (
    <Wrapper>
        <h2>Products</h2>
        <ProductList />
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
    width: 1100px;
    max-width: 100%;
    margin: 0 auto;

   
    
`

export default Products