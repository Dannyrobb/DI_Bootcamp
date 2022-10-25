export const DETAILS = "DETAILS";

export const showDetails = (obj) => {
  return {
    type: DETAILS,
    payload: obj,
  };
};
