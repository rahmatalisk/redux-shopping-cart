import { ADD_PRODUCT, DECREMENT_QTY, DELETE_PRODUCT_FROM_CART, INCREMENT_QTY } from "./ActionTypes";

export const productAdded = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const incrementQty = (id) => {
  return {
    type: INCREMENT_QTY,
    payload: id,
  };
};

export const decrementQty = (id) => {
  return {
    type: DECREMENT_QTY,
    payload:id,
  };
};
export const deleteFromCart = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload:id,
  };
};
