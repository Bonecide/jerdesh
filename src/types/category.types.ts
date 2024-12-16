type SubCategoriesProps = Omit<CategoryProps, 'sub_categories' | 'count'>;

interface CategoryProps {
    id:number;
    title:string;
    slug:string;
    isActive:boolean;
    sub_categories: SubCategoriesProps[]
    announcements_count:number;
}

interface UseCategoryProps {
    categories: CategoryProps[],
    isLoad: boolean;
}


