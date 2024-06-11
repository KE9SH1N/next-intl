import { configureStore } from "@reduxjs/toolkit";
import multilanguageReducer from "../feature/languageSlice";

const store = configureStore({
	reducer: {
		multilanguage: multilanguageReducer,
	},
});

export default store;
