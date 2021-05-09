// INITIAL STATE UNTUK MENYIMPAN DATA DI DALAM STORE BERDASARKAN FEATURE/REDUCER
const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return {
        ...initialState,
        count: state.count + 1, // count : 0 + 1
      };
    }
    case "DECERASE": {
      return {
        ...initialState,
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        ...initialState,
        count: 0,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default counter;
