import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});


export const search = (url,setData) => (
  api.get(url).then(resp => setData(resp.data))
)
