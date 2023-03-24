import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // projects: project
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import authSlice from "../features/auth/authSlice";
// import messagesSlice from "../features/messages/messagesSlice";
// import { apiSlice } from "../features/api/apiSlice";
// import conversationsSlice from "../features/conversations/conversationsSlice";

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     conversations: conversationsSlice,
//     messages: messagesSlice,
//     auth: authSlice,
//   },
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });
