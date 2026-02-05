import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronRightIcon, LogOutIcon } from "lucide-react";

export function ProfileDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-3 py-2">
                    <span className="font-medium font-rubik">ADMIN</span>
                    <ChevronDownIcon className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                alignOffset={10}
                className="px-2 py-4 border-border/20 text-border"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-rubik px-4 font-bold">Admin</h2>
                    <DropdownMenuItem className="flex items-center justify-between font-rubik uppercase px-4 py-3">
                        Change password
                        <ChevronRightIcon className="size-4" />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between font-rubik uppercase px-4 py-3">
                        Log out
                        <LogOutIcon className="size-4" />
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
