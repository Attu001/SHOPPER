import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Componentes/Assests/dropdown_icon.png';
import Item from '../Componentes/items/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // Properly use context

  // Filter products based on the category
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing {filteredProducts.length} </span> out of {all_product.length} products
        </p>
        <div className="shopcategorysort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))
        ) : (
          <h1>Nothing to show</h1>
        )}
      </div>

      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory;
