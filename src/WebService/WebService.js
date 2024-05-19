import axios from "axios";

class Webservice {
  getAPICall(url) {
    const data = axios.get(url);
    return data;
  }
}
export default new Webservice();
