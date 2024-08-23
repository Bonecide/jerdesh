import { ADD } from "@/utils/mock"


export const Status = ({item} : {item : ADD}) => {

    return (
       <p className="text-center text-primary lg:text-[20px] md:text-[15px]">
        {item.category}
       </p>
    )
}