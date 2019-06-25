import axios from "axios";

export const workItem = {
  r: async () => {
    const { data } = await axios("http://localhost:6001/items");
    return data;
  },
  u: async params => {
    const { data } = await axios(`http://localhost:6001/${params.id}`, {
      method: "PUT",
      data: {
        ...params
      }
    });
    return data;
  },
  c: async params => {
    const { data } = await axios(`http://localhost:6001/items`, {
      method: "POST",
      data: {
        ...params
      }
    });
    return data;
  },
  d: async params => {
    const { data } = await axios(`http://localhost:6001/${params.id}`, {
      method: "DELETE",
      data: {
        ...params
      }
    });
    return data;
  }
};
