import { CreateFieldsType } from "@/features/CreateAddForm";
import { rentalFetchAuthorized } from "../utils";
import { createFormData } from "../utils/helpers/createFormdata";
import { UploadFile } from "antd";
import toast from "react-hot-toast";
import { handlerError } from "../utils/rentalFetch/errorHandler";

export const createAdd = async (values: CreateFieldsType) => {
  try {
    const images = values.images;
    delete (values as Partial<typeof values>).images;
    const formData = createFormData({
      ...values,
    });

    images.fileList.forEach((file: UploadFile<[]>) => {
      if (file.originFileObj instanceof File) {
        formData.append("images[]", file.originFileObj);
      } else {
        console.error("Файл не является экземпляром File:", file);
      }
    });

    await rentalFetchAuthorized("announcement/create", {
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
