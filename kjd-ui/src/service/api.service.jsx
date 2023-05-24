import axios from "axios";
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
export class ApiService {
  getSlides = async () => {
    const url = REACT_APP_API_URL ? REACT_APP_API_URL : "http://localhost:3004/v1/api";
    const { data } = await axios.get(`${url}`);
    return data;
  };
}
