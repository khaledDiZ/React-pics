import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 73f76a63abba49692d4764d0bb6a1945454fb5cb623b67b84fbc8e90243ed2f0"
  }
});
