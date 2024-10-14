import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterTypeState = {
  textInput?: string;
  control: "category" | "status" | "todas";
  value: string;
};

const initialState: FilterTypeState = {
  textInput: "",
  control: "todas",
  value: "Todas",
};

const filterSlice = createSlice({
  name: "filterReducer",
  initialState,
  reducers: {
    filterInput: (state, action: PayloadAction<string>) => {
      state.textInput = action.payload;
    },
    filterTag: (state, action: PayloadAction<FilterTypeState>) => {
      state.control = action.payload.control;
      state.value = action.payload.value;
    },
  },
});

export const { filterInput, filterTag } = filterSlice.actions;
export default filterSlice.reducer;
