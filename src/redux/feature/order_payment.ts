import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import cuid from "cuid";
export interface OrderState {
  order_id?: string;
  game_id?: string;
  amount?: number;
  email?: string;
}
const initialState: OrderState = {
  order_id: "",
  game_id: "",
  amount: 0,
  email: "",
};
export const orderPayment = createSlice({
  name: "orderPayment",
  initialState,
  reducers: {
    order: (state, action: PayloadAction<OrderState>) => {
      const { game_id, amount, email } = action.payload;
      state.order_id = `order-${cuid()}`;
      state.game_id = game_id;
      state.amount = amount;
      state.email = email;
    },
  },
});

export const { order } = orderPayment.actions;
export default orderPayment.reducer;
