import axios from "axios";
import { notification } from "antd";

import { API_URL } from "shared/config";

export const api = axios.create({ baseURL: API_URL });

api.interceptors.response.use(undefined, (error) => {
  // TODO: show shortened error message
  const description = error.response.data;

  notification.error({
    message: "Error",
    description,
  });
});
