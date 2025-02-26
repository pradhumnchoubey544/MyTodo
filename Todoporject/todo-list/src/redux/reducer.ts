import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  client: { toggleForm: false, formId: undefined, deletedItem: null },
};


export const ReducerSlice = createSlice({
  name: "todoapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
    
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateAction: (state, action) => {
      state.client.formId = action.payload;
    },
    deleteAction: (state, action) => {
      state.client.deletedItem = action.payload;
    },
  },
});


export const { toggleChangeAction, updateAction, deleteAction } =
  ReducerSlice.actions;

export default ReducerSlice.reducer;
