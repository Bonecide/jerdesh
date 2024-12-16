import { CreateFieldsType } from "@/features/CreateAddForm";
import { createFormData } from "../utils/helpers/createFormdata";
import { rentalFetchAuthorized } from "../utils";
import toast from "react-hot-toast";
import { handlerError } from "../utils/rentalFetch/errorHandler";

export const editAnnoune = async (
  values: CreateFieldsType,
  announceId: number
) => {
  try {
    delete (values as Partial<typeof values>).images;
    const phone = values.phone[0] === "+" ? values.phone : "+" + values.phone;
    const data = { ...values, phone };

    const formData = createFormData({
      ...data,
    });

    await rentalFetchAuthorized(`announcement/update/${announceId}`, {
      method: "POST",
      contentType: null,
      body: formData,
    });

    toast.success("Ваше объявление успешно создано!");
    return "success";
  } catch (error) {
    handlerError(error);
  }
};
