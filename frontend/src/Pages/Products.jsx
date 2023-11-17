import React, { useContext } from 'react';
import { ShopContext } from '../Components/Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => {
    return e.id === Number(productId)
  })


  return (

    <div className='products'>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>

    </div>
  )
}

export default Products;