import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import emailService from "../services/emailService";
import { toast } from "react-toastify";

const initialState = {
  sendInEmail: false,
  emailSend: false,
  message: "",
};

export const sendAutomatedEmail = createAsyncThunk("email/send-email", async (emailData, thunkAPI) => {
  try {
    return await emailService.sendAutomatedEmail(emailData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    EMAIL_RESET(state) {
      state.sendInEmail = false;
      state.emailSend = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendAutomatedEmail.pending, (state, action) => {
        state.sendInEmail = true;
      })
      .addCase(sendAutomatedEmail.fulfilled, (state, action) => {
        state.sendInEmail = true;
        state.emailSend = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(sendAutomatedEmail.rejected, (state, action) => {
        state.sendInEmail = false;
        state.emailSend = false;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { EMAIL_RESET } = emailSlice.actions;

export default emailSlice.reducer;
