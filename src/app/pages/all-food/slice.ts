import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
  chosenProduct: null,
  products: [],
  currentPage: 1, // Add currentPage to the state
};

const productPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload; // Set the current page
    },
  },
});

export const { setRestaurant, setChosenProduct, setProducts, setCurrentPage } =
  productPageSlice.actions;

const ProductPageReducer = productPageSlice.reducer;
export default ProductPageReducer;
