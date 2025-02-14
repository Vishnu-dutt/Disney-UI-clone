import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/Movies/movieSlice"; // Import the default export

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// import { movieReducer } from "../features/Movies/movieSlice";
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice"; // Example reducer import

// export default configureStore({
//   reducer: {
//     user: userReducer,
//     movie: movieReducer, // Add your reducers here
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
