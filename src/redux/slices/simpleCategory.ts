import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TOptions = {
	manufacturer: string;
	model: string;
	specificModel: string;
};
export type SimpleCategory = {
	windowId: number;
	isDomestic: boolean;
	options: TOptions;
};

const initialState: SimpleCategory = {
	windowId: -1,
	isDomestic: true,
	options: {
		manufacturer: "",
		model: "",
		specificModel: "",
	},
};

type SimpleCategoryAction = PayloadAction<{
	key: keyof TOptions;
	value: string;
}>;

export const simpleCategorySlice = createSlice({
	name: "simpleCategory",
	initialState,
	reducers: {
		setCategoryWindowId: (state, action: PayloadAction<number>) => {
			state.windowId = action.payload;
		},
		setCategryIsDomestic: (state, action: PayloadAction<boolean>) => {
			state.isDomestic = action.payload;
		},
		setSimpleCategoryOptions: (state, action: SimpleCategoryAction) => {
			const { key, value } = action.payload;
			state.options[key] = value;
		},
	},
});

export const {
	setCategoryWindowId,
	setCategryIsDomestic,
	setSimpleCategoryOptions,
} = simpleCategorySlice.actions;

export default simpleCategorySlice.reducer;
