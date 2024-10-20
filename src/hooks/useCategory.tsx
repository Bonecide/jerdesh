import { CategoryAtom } from "@/atoms/category";
import { CategoryOptionProps } from "@/features/CreateAddForm";
import { getAllCategories } from "@/services/category";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";

export default function useCategory(): UseCategoryProps {
  const [categoriesAtom, setCategoriesAtom] = useAtom(CategoryAtom);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  const fetchData = async () => {
    const res = (await getAllCategories()) || [];
    setCategories(res);
    setCategoriesAtom(res);
    setIsLoad(false);
  };

  useEffect(() => {
    if (categoriesAtom.length) {
      setCategories(categoriesAtom);
      setIsLoad(false);
    } else {
      fetchData();
    }
  }, []);

  return { categories, isLoad };
}
