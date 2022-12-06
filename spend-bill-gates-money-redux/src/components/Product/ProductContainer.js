import React from 'react'
import Product from './index';
import { useSelector, useDispatch } from 'react-redux';

function ProductContainer() {
    const data = useSelector((state) => state.products);
  return (
    <div className='container'>
            {data.items.map((product) => (
          <Product key={product.id} item={product} />
        ))}
    </div>
  )
}

export default ProductContainer