import { redirect } from "react-router";
import { url, status } from "../__generated__/[jp].[buy-me-a-coffee]._index";

export const loader = () => {
  throw redirect(url, status);
};
