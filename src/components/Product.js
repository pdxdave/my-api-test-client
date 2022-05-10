import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Product = ({id, name, price, url}) => {
  return (
    <Wrapper>
      <article>
        <img src={url} alt={name} />
        <div className='info'>
           <h3>{name}</h3>
            <p>${price}</p>
        </div>
        <button type="button" className='btn'>
          <Link  to={`/single-product/${id}`}>Click</Link>
        </button>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 1100px;
    max-width: 100%;
    margin: 0 auto;

   

   .info {
     display: flex;
     align-items: center;
     justify-content: space-around;
   }
   .info h3 {
     text-transform: capitalize;
   }

    img{
    width: 100%;
    height: 220px;
    object-fit: scale-down;
  }

  .btn {
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }
    
`
export default Product