import { createSlice } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/formatters/helper";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {},
  reducers: {
    addMessage(state, action) {
      const { from, to, message } = action.payload;
      if (!state[from]) state[from] = {};
      if (!state[from][to]) state[from][to] = [];
      state[from][to].push({
        from,
        message,
        timeStamp: formatDate(new Date()),
      });
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
export const messagesSelector = (state) => state.messages;
