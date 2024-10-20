import { useAtom } from "jotai";
import { rentalFetchUnauthorized } from "../utils"
import { handlerError } from "../utils/rentalFetch/errorHandler";


export const getAllCategories = async ():Promise<CategoryProps[] | undefined> => {
    try {
        const res = await rentalFetchUnauthorized('categories', {method: 'GET'});
        const resJson = await res.json();
        return resJson.data.map((category:CategoryProps) => ({
            ...category,
            count: 0
        }))
    } catch (error) {
        handlerError(error);
        return []
    }
}