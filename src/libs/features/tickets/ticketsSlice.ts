import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITicket } from "../../types";

interface TicketsState {
  tickets: ITicket[];
}

const initialState: TicketsState = {
  tickets: [],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<ITicket>) => {
      state.tickets.unshift(action.payload);
    },
    updateTicket: (state, action: PayloadAction<ITicket>) => {
      const index = state.tickets.findIndex(
        (ticket) => ticket.id === action.payload.id
      );
      if (index !== -1) {
        state.tickets[index] = action.payload;
      }
    },
    removeTicket: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },
  },
});

export const { addTicket, updateTicket, removeTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
