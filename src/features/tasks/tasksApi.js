import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
    changeStatusOfTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            console.log(draft);
            return draft.filter((task) => task.id != id);
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

// editConversation: builder.mutation({
//   query: ({ id, data, sender }) => ({
//       url: `/conversations/${id}`,
//       method: "PATCH",
//       body: data,
//   }),
//   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//       // optimistic cache update start
//       const pathResult1 = dispatch(
//           apiSlice.util.updateQueryData(
//               "getConversations",
//               arg.sender,
//               (draft) => {
//                   const draftConversation = draft.find(
//                       (c) => c.id == arg.id
//                   );
//                   draftConversation.message = arg.data.message;
//                   draftConversation.timestamp = arg.data.timestamp;
//               }
//           )
//       );
//       // optimistic cache update end

//       try {
//           const conversation = await queryFulfilled;
//           if (conversation?.data?.id) {
//               // silent entry to message table
//               const users = arg.data.users;
//               const senderUser = users.find(
//                   (user) => user.email === arg.sender
//               );
//               const receiverUser = users.find(
//                   (user) => user.email !== arg.sender
//               );

//               dispatch(
//                   messagesApi.endpoints.addMessage.initiate({
//                       conversationId: conversation?.data?.id,
//                       sender: senderUser,
//                       receiver: receiverUser,
//                       message: arg.data.message,
//                       timestamp: arg.data.timestamp,
//                   })
//               );
//           }
//       } catch (err) {
//           pathResult1.undo();
//       }
//   },
// }),

export const {
  useGetTasksQuery,
  useChangeStatusOfTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
