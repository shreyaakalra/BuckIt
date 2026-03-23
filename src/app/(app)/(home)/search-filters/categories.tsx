import { Category } from "@/payload-types";
import { Key } from "react";

interface Props{
    data: any;
};


export const Categories = ({
    data,
}: Props) => {
    return(
        <div>
            {data.map((category: Category) => {
                <div key={category.id}>
                    <CategoryDropdown
                        category={catgeory}
                        isActive={false}
                        isNavigationHovered={false}
                     />
                </div>

            })}
        </div>
    )
}