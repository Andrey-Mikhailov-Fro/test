import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export interface CategoryEntity {
    id: number,
    name: string,
}

type CategoryPayload = CategoryEntity[]; 

const initialState: { activeId: number | null,  entities: CategoryEntity[] } = { activeId: null, entities: [] };

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<number>) => {
            state.activeId = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addMatcher(api.endpoints.getCategories.matchFulfilled, (state, action: PayloadAction<CategoryPayload>) => {
            state.entities = [...state.entities, ...action.payload]
        });
    },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;