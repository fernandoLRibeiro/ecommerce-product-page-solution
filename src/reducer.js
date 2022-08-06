export const initialState = {
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== action.item.name),
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
