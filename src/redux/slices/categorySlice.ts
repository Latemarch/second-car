import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Category = {
	Manufacturer: string[];
	Model: string[];
	Badge: string[];
	Transmission: string[];
	FuelType: string[];
	Year: number[];
	FormYear: string[];
	Mileage: number[];
	HomeServiceVerification: string[];
	ServiceCopyCar: string[];
	Price: number[];
	OfficeCityState: string[];
	ModifiedDate: string[];
};
const initialState: Category = {
	Manufacturer: [],
	Model: [],
	Badge: [],
	Transmission: [],
	FuelType: [],
	Year: [],
	FormYear: [],
	Mileage: [],
	HomeServiceVerification: [],
	ServiceCopyCar: [],
	Price: [],
	OfficeCityState: [],
	ModifiedDate: [],
};

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		setCategory: (
			state,
			action: PayloadAction<{ key: keyof Category; value: number | string }>
		) => {
			const { key, value } = action.payload;
			const keyArray = state[key] as Array<string | number>;
			if (keyArray.includes(value)) {
				const index = keyArray.indexOf(value);
				keyArray.splice(index, 1);
			} else {
				keyArray.push(value);
			}
		},
	},
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
