import { configureStore } from "@reduxjs/toolkit";
import category, { Category } from "./slices/categorySlice";

export type Store = {
	category: Category;
};
export default configureStore({
	reducer: { category },
});
