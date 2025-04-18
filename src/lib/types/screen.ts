import { Member } from "./member";
import { Order } from "./orders";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
  currentPage: number;       //
  totalPages: number;
}

/** ORDERS PAGE **/
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
