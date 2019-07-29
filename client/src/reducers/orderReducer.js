// import uuid from "uuid/v1";

export const orderReducer = async (state, action) => {
  switch (action.type) {
    case "ON_LOAD": {
      return [...action.payload];
    }
    case "REMOVE_ORDER":
      return [...state.filter(order => order.id !== action.id)];
    default:
      return state;
  }
};
