//WE CREATE AN INSTANCE OF AXIOS AND EXPORT IT TO USE IT FROM NOW HENCEFORTH.
import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fred-portfolio-4e62f.cloudfunctions.net/app",
});
export default instance;
