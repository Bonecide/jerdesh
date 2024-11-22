import { CategoryAtom } from "@/atoms/category";
import { getAllCategories } from "@/services/category";
import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
export default function useCategory(): UseCategoryProps {
  const [categoriesAtom, setCategoriesAtom] = useAtom(CategoryAtom);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  const fetchData = useCallback(async () => {
    const res = (await getAllCategories()) || [];
    setCategories(res);
    setCategoriesAtom(res);
    setIsLoad(false);
  }, [setCategoriesAtom]);

  useEffect(() => {
    if (categoriesAtom.length) {
      setCategories(categoriesAtom);
      setIsLoad(false);
    } else {
      fetchData();
    }
  }, [categoriesAtom, fetchData]);
  return { categories, isLoad };
}
