import { createSlice } from "@reduxjs/toolkit";

interface languageState {
	selectedLanguage: string;
}

const initialState: languageState = {
	selectedLanguage: "bn",
};

const languageSlice = createSlice({
	name: "multilanguage",
	initialState,
	reducers: {
		setMultiLanguage: (state, action) => {
			state.selectedLanguage = action.payload;
		},
	},
});

export const { setMultiLanguage } = languageSlice.actions;

export const selectLanguage = (state: any) =>
	state?.multilanguage?.selectedLanguage;

export default languageSlice.reducer;
