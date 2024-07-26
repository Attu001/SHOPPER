import React, { useContext } from 'react'
import  { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import BreadCrums from '../Componentes/BreadCrums/BreadCrums'
import ProductDisplay from '../Componentes/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Componentes/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Componentes/RelatedProduct/RelatedProducts'

const Product = () => {

  const {all_product}=useContext(ShopContext)

    const {productId} =useParams(); 

    const product=all_product.find((e)=>e.id===Number(productId));

  return (
    <div>
        <BreadCrums product={product}/>
        <ProductDisplay product={product} />
        <DescriptionBox/>
        <RelatedProducts/>

    </div>
  )
}

export default Product