import { ADD } from "@/utils/mock"


export const Status = ({item} : {item : ADD}) => {

    return (
       <p className="text-center text-primary text-[20px]">
        {item.description}
       </p>
    )
}