import { IRoute } from "features/routing";
import * as Pages from "pages";
import { PUBLIC_PATH } from "shared/config";

export const publicRoutes: IRoute[] = [
  {
    default: true,
    element: <Pages.Login />,
    path: PUBLIC_PATH.LOGIN,
  },
];
