import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./features/VisibilitySlice";
import UserReducer from "./features/UserSlice";

// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
// };

export const store = configureStore({
  reducer: {
    visible: visibilityReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
