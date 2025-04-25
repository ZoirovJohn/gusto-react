import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import HomePageReducer from "./pages/home/slice";
import ProductPageReducer from "./pages/all-food/slice";
import OrdersPageReducer from "./components/shoppingCart/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductPageReducer,
    ordersPage: OrdersPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
