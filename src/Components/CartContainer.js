import React from "react";
import { useSelector } from "react-redux";
import BillDetail from "./BillDetail";
import CartItem from "./CartItem";

const CartContainer = () => {
  const state = useSelector(state => state);
  const cartProducts = state.filter(product => product.cartQuantity > 0);

  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
          {
            cartProducts.length === 0 && <p>No Product Found</p>
          }
          {
            cartProducts.map(pd =><CartItem product={pd} /> )
          }
          
          {/* <!-- Cart Items Ends --> */}
        </div>

        {/* <!-- Bill Details --> */}
        <BillDetail cartProducts={cartProducts} />
      </div>
    </div>
  );
};

export default CartContainer;
