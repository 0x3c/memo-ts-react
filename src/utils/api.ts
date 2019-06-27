import axios from "axios";
import { headers } from "./Header";

export const workItem = {
  r: async () => {
    const { data } = await axios("http://localhost:6001/items", {
      method: "GET",
      headers
    });
    return data;
  },
  u: async params => {
    const { data } = await axios(`http://localhost:6001/${params.id}`, {
      method: "PUT",
      headers,
      data: {
        ...params
      }
    });
    return data;
  },
  c: async params => {
    const { data } = await axios(`http://localhost:6001/items`, {
      method: "POST",
      headers,
      data: {
        ...params
      }
    });
    return data;
  },
  d: async params => {
    const { data } = await axios(`http://localhost:6001/${params.id}`, {
      method: "DELETE",
      headers,
      data: {
        ...params
      }
    });
    return data;
  }
};

export const auth = {
  login: async params => {
    const { data } = await axios("http://localhost:6001/login", {
      method: "POST",
      headers,
      data: {
        ...params
      }
    });
    return data;
  },
  signUp: async params => {
    const { data } = await axios("http://localhost:6001/register", {
      method: "POST",
      headers,
      data: {
        ...params
      }
    });
    return data;
  }
};
