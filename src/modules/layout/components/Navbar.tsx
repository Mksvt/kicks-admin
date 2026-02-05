import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon, ChevronDownIcon, SearchIcon } from "lucide-react";

export function Navbar() {
    return (
        <div className="flex items-center justify-end px-15 py-7 w-full h-24 bg-background border-b border-border/20">
            <div className="flex items-center space-x-10">
                <SearchIcon className="size-5" />
                <BellIcon className="size-5" />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="px-3 py-2">
                            <span className="font-medium font-rubik">
                                ADMIN
                            </span>
                            <ChevronDownIcon className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </div>
        </div>
    );
}
