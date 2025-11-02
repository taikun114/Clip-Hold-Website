import { redirect } from "react-router";
import { url, status } from "../__generated__/[github-repo]._index";

export const loader = () => {
  throw redirect(url, status);
};
