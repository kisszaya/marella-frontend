import { api } from "shared/api";

interface Props {
  access: string;
  refresh: string;
}

export const updateTokens = ({ access, refresh }: Props) => {
  api.defaults.headers.common.Authorization = `Bearer ${access}`;

  //TODO in production delete save refresh cookie in localeStorage
  localStorage.setItem("refresh", refresh);
};
