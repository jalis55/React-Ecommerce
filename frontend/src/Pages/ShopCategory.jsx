import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Components/Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} className='shop-category-banner' alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>show 1-12 out of 36</span>

        </p>
        <div className="shop-catergory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            
            return <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory;