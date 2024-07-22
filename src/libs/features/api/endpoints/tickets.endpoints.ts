import { apiSlice } from "../apiSlice";

export const ticketEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTicket: builder.mutation({
      query: (ticket) => {
        return {
          url: "/tickets",
          method: "POST",
          headers: {
            'Content-Type': 'multipart/form-data;'
          },
          body: ticket,
          formData:true
        };
      },
    }),
    getTickets: builder.query({
      query: () => "/tickets",
    }),
    getTicketById: builder.query({
      query: (id) => `/tickets/${id}`,
    }),
    attendTicket: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tickets/${id}/attend`,
        method: "PUT",
        body: data,
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
  useAttendTicketMutation,
  useDeleteTicketMutation,
} = ticketEndpoints;
