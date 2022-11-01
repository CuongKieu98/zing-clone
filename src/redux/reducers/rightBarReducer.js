const initialState = {
  isOpen: false,
};

const rightBarReducer = (state = initialState, action) => {
    switch (action.type){
        case "TOGGLE_RIGHTBAR":
            return {
                ...state,
                isOpen: action.payload
            }
        default:
            return state;
    }
};
export default rightBarReducer;
