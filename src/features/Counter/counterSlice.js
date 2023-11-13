import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, actions) => {
      state.count += parseInt(actions.payload.amount);
    },
    decreament: (state, actions) => {
      state.count -= parseInt(actions.payload.amount);
    },
  },
});

export const { increament, decreament } = counterSlice.actions;

export default counterSlice.reducer;
