import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";


export const profileAnnouncementsAtom = atom(async() => {
    try {
        const {data} = await baseGetRequest('my-announcements')
    } catch (error) {
        return []
    }
})