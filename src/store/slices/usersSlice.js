import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
    selectedUser: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    removeCurrentUser(state) {
      state.currentUser = null;
      state.selectedUser = null;
    },
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { setCurrentUser, removeCurrentUser, setSelectedUser } =
  usersSlice.actions;
export const userSelector = (state) => state.users;
