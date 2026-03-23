

import { Category } from "@/payload-types";
import { Key } from "react";
import { CategoryDropdown } from "./category-dropdown";

interface Props{
    data: any;
};


export const Categories = ({
    data,
}: Props) => {
    return(
        <div>
            {data.docs.map((category: Category) => (
                <div key={category.id}>
                    <CategoryDropdown
                        category={category}
                        isActive={false}
                        isNavigationHovered={false}
                     />
                </div>

            ))}
        </div>
    )
}