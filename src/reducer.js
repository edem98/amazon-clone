export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basket) => {
        return basket.id === action.item;
      });
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove the product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      console.log(action);
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
