import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
export async function logoutAction() {
  //delete the user
  deleteItem({ key: "userName" });
  // show success notification
  toast.success("You've deleted your account successfully!");
  //return redirect
  return redirect("/");
}
