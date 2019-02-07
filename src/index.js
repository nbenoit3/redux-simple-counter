const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()));

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", e => dispatch({ type: "INCREMENT" }));

const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", e => dispatch({ type: "DECREMENT" }));

const increment_5_Button = document.getElementById("increment_5");
increment_5_Button.addEventListener("click", e =>
  dispatch({ type: "INCREMENT_5" })
);

const decrement_5_Button = document.getElementById("decrement_5");
decrement_5_Button.addEventListener("click", e =>
  dispatch({ type: "DECREMENT_5" })
);

const dropDownButton = document.getElementById("color");
dropDownButton.addEventListener("change", e => {
  dispatch({
    type: "color",
    color: e.target.value
  });
});

const numberField = document.getElementById("number");
numberField.addEventListener("change", e => {
  dispatch({
    type: "number",
    number: parseInt(e.target.value)
  });
});
