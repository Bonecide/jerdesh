import { Announce } from "@/atoms/announcements";
import { Subway } from "@/atoms/subways";
import { CreateAddForm } from "@/features/CreateAddForm";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { Metadata } from "next";

interface IEditAnnounce {
  params: {
    id: number;
  };
}

export const metadata: Metadata = {
  title: "Изменить объявление | Jerdesh",
  description: "Jerdesh",
};
const EditAnnounce = async ({ params }: IEditAnnounce) => {
  let { data } = await baseGetRequest<Announce>(`announcement/${params.id}`, {
    config: {
      isServer: true,
    },
  });
  const subways = await baseGetRequest<Subway[]>("subways", {
    config: {
      isServer: true,
    },
  });

  return (
    <div className="containerBlock flex flex-col items-center">
      <h2 className="text-[24px] font-[500] mt-[30px]">Изменить</h2>
      <CreateAddForm subways={subways.data} announce={data} />
    </div>
  );
};

export default EditAnnounce;
