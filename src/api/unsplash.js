import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1a4df38856f8d9a46682e58a2ffbe5f4f28bded205d95814c9c58258c7638079"
  }
});
