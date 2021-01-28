export const Type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const increment = (value) => {
  return {
    type: Type.INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: Type.DECREMENT,
    payload: value,
  };
};