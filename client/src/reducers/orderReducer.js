import uuid from "uuid/v1";

export const orderReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ORDER":
            return [
                ...state,
                {
                    name: action.order.name,
                    noOfOrders: action.order.noOfOrders,
                    id: uuid(),
                },
            ];
        case "REMOVE_ORDER":
            return state.filter(order => order.id !== action.id);
        default:
            return state;
    }
};
