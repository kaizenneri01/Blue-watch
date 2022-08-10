import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/UserSlice";

// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
// };

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
