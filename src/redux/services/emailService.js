import axios from "axios";
import { API_URL } from "./authService";

//Send automated email
const sendAutomatedEmail = async (emailData) => {
  const response = await axios.post(API_URL + "send-email", emailData);
  return response.data;
};

const emailService = {
  sendAutomatedEmail,
};

export default emailService;
