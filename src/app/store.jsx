// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"; // Example reducer import

export default configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
