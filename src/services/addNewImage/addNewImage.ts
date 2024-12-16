import { UploadFile } from "antd";
import { createFormData } from "../utils/helpers/createFormdata";
import { rentalFetchAuthorized } from "../utils";
import toast from "react-hot-toast";

export const addNewImage = async (file: UploadFile, announceId: number) => {
  try {
    const formData = createFormData({
      image: file.originFileObj,
    });

    const response = await rentalFetchAuthorized(
      `announcement/${announceId}/image`,
      {
        method: "POST",
        body: formData,
        contentType: null,
      }
    );
    const data: {
      data: {
        data: {
          id: number;
          path: string;
        };
      };
    } = await response.json();
    return data.data.data;
  } catch (error) {
    toast.error("Фотография не добавлена!");
    return null;
  }
};
