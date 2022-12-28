import * as request from "../ultis/request";

export const search = async (q, type = 'less') => {
  try {
    const res = await request.get("videos", {
      params: {
        q: q,
        type,
      },
    });
    return res.data;
  } catch (err) {
   console.log(err);
  }
};