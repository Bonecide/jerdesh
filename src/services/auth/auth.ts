import { handlerError } from "../utils/rentalFetch/errorHandler";
import { rentalFetch } from "../utils/rentalFetch/rentalFetch";

type Payload = {
  email: string;
  password: string;
};

type DataPayload = {
  access_token: string;
};
export const auth = async (payload: Payload) => {
  try {
    const data = await rentalFetch("login", {
      method: "POST",
      body: payload,
    });

    const json = (await data.json()).data;
    const access_token = (json as DataPayload).access_token;

    return access_token;
  } catch (error) {
    handlerError(error);
  }
};
