import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity=useSelector(getTotalCartQuantity)
  const totalCartPrice=useSelector(getTotalCartPrice)
  if(!totalCartQuantity)return null
  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4 sm:px-6 uppercase text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 sm:space-x-6 font-semibold space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
