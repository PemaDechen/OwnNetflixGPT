import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGES } from "./constants";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});


export default configSlice.reducer
export const {updateLanguage}= configSlice.actions; 