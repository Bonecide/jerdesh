import { ADDS } from "@/utils/mock";
import { RecomendationCard } from "./RecomendationCard";

export const Recomendation = ({ id }: { id: number }) => {
  const rec = ADDS.filter((item) => item.id !== id).slice(0, 3);
  return (
    <div className="mt-[30px]">
      <h2 className="font-[500] text-[20px]">Рекомендации</h2>
      <div className="grid grid-cols-3 gap-[27px] mt-[30px]">
        {rec.map((item) => (
          <RecomendationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
