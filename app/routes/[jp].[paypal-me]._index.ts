import { redirect } from "react-router";
import { url, status } from "../__generated__/[jp].[paypal-me]._index";

export const loader = () => {
  throw redirect(url, status);
};
