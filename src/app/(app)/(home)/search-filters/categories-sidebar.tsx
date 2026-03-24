import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CustomCategory } from "../types";

interface Props{
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: CustomCategory[];
}

export const CategoriesSidebar = ({
    open,
    onOpenChange,
    data,
}: Props) => {

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
                style={{ backgroundColor: "white"}}
            >
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>
                        Categories
                    </SheetTitle>
                </SheetHeader>

            </SheetContent>
        </Sheet>
    )
}