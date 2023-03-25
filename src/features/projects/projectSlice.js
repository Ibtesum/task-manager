import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  check: [],
};

const projectSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    changeChecked: (state, action) => {
      const indexOfProject = state.check.findIndex(
        (obj) => obj.checkedProject === action.payload.checkedProject
      );
      if (indexOfProject === -1) {
        state.check.push(action.payload);
      } else {
        state.check[indexOfProject] = action.payload;
      }
    },
  },
});

export const { changeChecked } = projectSlice.actions;
export default projectSlice.reducer;
