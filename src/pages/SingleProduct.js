import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
const url = 'https://api-squeak.netlify.app/api/single-product?id='

const SingleProduct = () => {
  const {id} = useParams()
  const [items, setItems] = useState()

  useEffect(() => {

    const fetchProduct = async () => {
      try {
          const response = await fetch(`${url}${id}`)
          const singleProduct = await response.json()
          setItems(singleProduct.fields)
        } catch (error) {
          console.log(error)
        }
      }
      fetchProduct()
     
  }, [id])

  if(!items){
    return <h1>loading...</h1>
  }
  
  return(
    <div>
      <h2>test</h2>
     {items.name}
     <img src={items.image[0].url} alt={items.name} />
    </div>
  )
}

export default SingleProduct