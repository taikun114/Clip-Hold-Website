import { redirect } from "react-router";
import { url, status } from "../__generated__/[paypal-me]._index";

export const loader = () => {
  throw redirect(url, status);
};
