import React, {useState, useEffect} from 'react'
import Product from './Product'
import styled from 'styled-components'
const url = 'https://api-squeak.netlify.app/api/product'

const ProductList = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const results = await fetch(url)
      const data = await results.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    
    <Wrapper>
      {products.map((product) => {
        return  ( 
            <Product key={product.id} {...product}/>
          )
      })}
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;

`

export default ProductList