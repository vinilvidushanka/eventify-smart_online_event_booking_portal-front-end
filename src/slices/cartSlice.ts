
import type {CartTickets} from "../modal/CartTickets.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {EventData} from "../modal/EventData.ts";
import type {PayloadAction}  from "@reduxjs/toolkit";

interface CartState {
    tickets: CartTickets[]
}

const initialState: CartState = {
    tickets: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers: {
        addTicketToCart(state, action: PayloadAction<EventData>) {
            const existingItem = state.tickets.find(ticket =>
                ticket.tickets.id === action.payload.id
            );

            if (!existingItem){
                state.tickets.push({tickets: action.payload, ticketsCount: 1});
            }
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const ticket = state.tickets.find(item => item.tickets.id === action.payload);
            if (ticket) {
                ticket.ticketsCount += 1;
            }
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const ticket = state.tickets.find(item => item.tickets.id === action.payload);
            if (ticket && ticket.ticketsCount > 1) {
                ticket.ticketsCount -= 1;
            }
        },
        removeTicketFromCart(state, action: PayloadAction<string>) {
            state.tickets = state.tickets.filter(item => item.tickets.id !== action.payload);
        },

        clearCart(state) {
            state.tickets = [];
        },
    }
});

export const { addTicketToCart, increaseQuantity, decreaseQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
