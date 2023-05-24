import  axios from "axios";

export class ApiService {
  getSlides = async () => {
    const { data } = await axios.get("http://localhost:3004/v1/api");
    return data;
  };
}
