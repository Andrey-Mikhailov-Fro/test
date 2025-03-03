import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/api";

type ProductApi = {
    id: number,
    category_id: number,
    name: string,
    description: string,
};

type ProductsPayload = ProductApi[];

const initialState: ProductApi[] = []

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addMatcher(api.endpoints.getProducts.matchFulfilled, (state, action: PayloadAction<ProductsPayload>) => {
            state = [...action.payload];
        });
    },
});

export default productsSlice.reducer;