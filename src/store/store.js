import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { friendsReducer } from "./slices/friendsSlice";
import { messagesReducer } from "./slices/messageSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    messages: messagesReducer,
    friends: friendsReducer,
  },
  devTools: true,
});

export default store;
