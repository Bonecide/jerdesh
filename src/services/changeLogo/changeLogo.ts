import { UploadFile } from "antd";
import { handlerError } from "../utils/rentalFetch/errorHandler";
import { createFormData } from "../utils/helpers/createFormdata";
import { rentalFetchAuthorized } from "../utils";
import toast from "react-hot-toast";

export const changeLogo = async (
  logo: UploadFile<any>,

  userId: number,
  email: string
) => {
  try {
    const formData = new FormData();
    if (logo.originFileObj instanceof File) {
      formData.append("logo", logo.originFileObj);
    }
    formData.append("email", email);
    await rentalFetchAuthorized(`profile/${userId}`, {
      method: "POST",
      body: formData,
      contentType: null,
    });
    toast.success("Логотип успешно изменён");
    return "success";
  } catch (error) {
    handlerError(error);
  }
};
