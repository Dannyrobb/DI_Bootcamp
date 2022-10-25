import { INSERT, UPDATE_INDEX, UPDATE, DELETE } from "./actions";
import { addToLocalStorage, getFromLocalStorage } from "../helpers/storage";
const initState = {
  currentIndex: -1,
  list: getFromLocalStorage("transactions"),
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case INSERT:
      state.list.push(action.payload);
      addToLocalStorage("transactions", [...state.list]);
      return { ...state, list: [...state.list], currentIndex: -1 };
    case UPDATE_INDEX:
      return { ...state, currentIndex: action.payload };
    case UPDATE:
      state.list[state.currentIndex] = action.payload;
      addToLocalStorage("transactions", [...state.list]);

      return { ...state, list: [...state.list], currentIndex: -1 };
    case DELETE:
      state.list.splice(action.payload, 1);
      addToLocalStorage("transactions", [...state.list]);

      return { ...state, list: [...state.list], currentIndex: -1 };
    default:
      return { ...state };
  }
};
