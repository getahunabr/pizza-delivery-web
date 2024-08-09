
import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/CartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const dispatch=useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity=useSelector(getCurrentQuantityById(id))
  const isInCart=currentQuantity>0
function handleAddToCart(){
  const newItem={
    pizzaId:id,
    name,
    quantity:1,
    unitPrice,
    totalPrice: unitPrice*1,
  }
dispatch(addItem(newItem))
}
  return (
    <div className="menu-item flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?"grayscale opacity-70":""}`} />
      <div className='flex flex-col grow pt-0.5'>
      <h2 className='font-medium'>{name}</h2>
      <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>
      <div className='mt-auto flex items-center justify-between'>
     {!soldOut ? (<p className='text-sm'>{formatCurrency(unitPrice)}</p>):(<p className='text-sm font-medium uppercase text-stone-500'>Sold out</p>)}

     {isInCart&& <div className='flex items-center gap-3 sm:gap-8'> <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/><DeleteItem pizzaId={id}/></div>}
     {!soldOut&&!isInCart&&<Button type="small"onClick={handleAddToCart}>Add to cart</Button>}
      </div>
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;





// import { formatCurrency } from "../../utils/helpers";

// function MenuItem({ pizza }) {
//   const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

//   return (
//     <li>
//       <img src={imageUrl} alt={name} />
//       <div>
//         <p>{name}</p>
//         <p>{ingredients.join(", ")}</p>
//         <div>
//           {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
//         </div>
//       </div>
//     </li>
//   );
// }

// export default MenuItem;
