import { IRoute } from "features/routing";
import { USER_PATH } from "shared/config";
import * as Pages from "pages";

export const userRoutes: IRoute[] = [
  {
    path: USER_PATH.SPACES,
    element: <Pages.Spaces />,
    default: true,
  },
];
