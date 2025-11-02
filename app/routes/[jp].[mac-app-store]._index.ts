import { redirect } from "react-router";
import { url, status } from "../__generated__/[jp].[mac-app-store]._index";

export const loader = () => {
  throw redirect(url, status);
};
