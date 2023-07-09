import { configureStore } from "@reduxjs/toolkit";
import category, { Category } from "./slices/categorySlice";
import { SimpleCategory } from "./slices/simpleCategory";
import simpleCategory from "./slices/simpleCategory";

export type Store = {
	category: Category;
	simpleCategory: SimpleCategory;
};
export default configureStore({
	reducer: { category, simpleCategory },
});
