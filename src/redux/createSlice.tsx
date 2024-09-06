import { createSlice } from "@reduxjs/toolkit";

interface storeTypes {
  count: number;
}

const initialState: storeTypes = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      return { ...state, count: state.count + 1 };
    },
    dic: (state) => {
      return { ...state, count: state.count - 1 };
    },
  },
});

export default counter.reducer;

export const { inc, dic } = counter.actions;
