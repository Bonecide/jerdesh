import { ProfileData } from "@/features/Profile/ProfileData/ProfileForm";
import { handlerError } from "../utils/rentalFetch/errorHandler";
import { rentalFetchAuthorized } from "../utils";
import toast from "react-hot-toast";

export const updateProfileData = async (data: ProfileData, user_id: number) => {
  try {
    await rentalFetchAuthorized(`profile/${user_id}`, {
      method: "POST",
      body: { ...data },
    });
    toast.success("Данные успешно обновлены!");

    return "success";
  } catch (error) {
    handlerError(error);
  }
};
