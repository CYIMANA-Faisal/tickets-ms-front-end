import { apiSlice } from "../apiSlice";

export const ticketEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTicket: builder.mutation({
      query: (ticket) => ({
        url: "/tickets",
        method: "POST",
        body: ticket,
      }),
    }),
    getTickets: builder.query({
      query: () => "/tickets",
    }),
    getTicketById: builder.query({
      query: (id) => `/tickets/${id}`,
    }),
    updateTicket: builder.mutation({
      query: ({ id, ...ticket }) => ({
        url: `/tickets/${id}`,
        method: "PUT",
        body: ticket,
      }),
    }),
    deleteTicket: builder.mutation({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateTicketMutation,
  useGetTicketsQuery,
  useGetTicketByIdQuery,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
} = ticketEndpoints;
