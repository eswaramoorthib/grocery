import axios from "axios";

const fbBaseURL = axios.create({
  baseURL: "https://grocery-a4fbc-default-rtdb.firebaseio.com/",
});

export default fbBaseURL;
