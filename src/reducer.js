const initialState = {
  value: 0,
  color: ""
};

const reducer = (state = initialState, action) => {
  let { type, number, color } = action;
  if (type === "INCREMENT") {
    return {
      value: state.value + 1,
      color: state.color
    };
  } else if (type === "DECREMENT") {
    return {
      value: state.value - 1,
      color: state.color
    };
  } else if (type === "INCREMENT_5") {
    return {
      value: state.value + 5,
      color: state.color
    };
  } else if (type === "DECREMENT_5") {
    return {
      value: state.value - 5,
      color: state.color
    };
  }
  if (type === "color") {
    return {
      value: state.value,
      color: color
    };
  }

  if (type === "number") {
    return {
      value: number,
      color: state.color
    };
  }

  return state;
};
