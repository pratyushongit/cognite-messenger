import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
  name: "friends",
  initialState: {},
  reducers: {
    addFriend(state, action) {
      const { userId, friendId } = action.payload;
      if (!state[userId]) {
        state[userId] = [];
      }
      state[userId].push(friendId);
    },
  },
});

export const friendsReducer = friendsSlice.reducer;
export const { addFriend } = friendsSlice.actions;
export const friendsSelector = (state) => state.friends;
