import {
  ADD_PRODUCT,
  DECREMENT_QTY,
  DELETE_PRODUCT_FROM_CART,
  INCREMENT_QTY,
} from "./ActionTypes";

const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload.name,
          img: action.payload.img,
          category: action.payload.category,
          price: action.payload.price,
          quantity: action.payload.quantity,
          firstQuantity: action.payload.quantity,
          cartQuantity: 0,
        },
      ];

    case INCREMENT_QTY:
      return state.map((it) => {
        if (it.id === action.payload) {
          const cartQuantity = it.cartQuantity;
          const quantity = it.quantity;
          const firstQuantity = it.firstQuantity;
          return {
            ...it,
            cartQuantity:
              cartQuantity < firstQuantity ? cartQuantity + 1 : cartQuantity,
            quantity: quantity > 0 ? quantity - 1 : quantity,
          };
        } else {
          return it;
        }
      });

    case DECREMENT_QTY:
      return state.map((it) => {
        if (it.id === action.payload) {
          const cartQuantity = it.cartQuantity;
          const quantity = it.quantity;
          const firstQuantity = it.firstQuantity;
          return {
            ...it,
            cartQuantity:
              cartQuantity <= firstQuantity ? cartQuantity - 1 : cartQuantity,
            quantity: quantity >= 0 ? quantity + 1 : quantity,
          };
        } else {
          return it;
        }
      });

    case DELETE_PRODUCT_FROM_CART:
      return state.map((it) => {
        if (it.id === action.payload) {
          const { quantity, cartQuantity } = it;
          return {
            ...it,
            quantity: quantity + cartQuantity,
            cartQuantity: 0,
          };
        }
        return it;
      });

    default:
      return state;
  }
};

export default shoppingCartReducer;
