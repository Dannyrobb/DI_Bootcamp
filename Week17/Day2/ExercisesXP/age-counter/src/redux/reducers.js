const initState = { age: 20 };

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "AGE_INC":
      return { ...state, age: state.age + 1 };
    case "AGE_DEC":
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};
