import axios from "axios";
import http from "http";
import https from "https";

const axiosInstance = axios.create({
  baseURL: "https://itunes.apple.com",
  httpAgent: new http.Agent({ keepAlive: false }),
  httpsAgent: new https.Agent({ keepAlive: false }),
  timeout: 5000,
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    Accept: "application/json",
  },
});

export async function searchItunes(term: string, media: string = "podcast") {
  const response = await axiosInstance.get("/search", {
    params: { term, media },
  });
  return response.data;
}
