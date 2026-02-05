import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "../constants";

export function NotificationsDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="px-3 py-2 data-[state=open]:text-primary"
                >
                    <BellIcon className="size-5 " />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                alignOffset={10}
                className="px-2 py-4 border-border/20 text-border"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-rubik px-4 font-bold">
                        Notifications
                    </h2>
                    {PRODUCTS.map((product) => (
                        <DropdownMenuItem
                            key={product.name}
                            className="flex items-center font-open-sans font-semibold cursor-pointer px-4 py-3"
                        >
                            <Image
                                height={40}
                                width={40}
                                src={product.img}
                                alt={product.name}
                            />
                            {product.name}
                        </DropdownMenuItem>
                    ))}
                    <Link
                        href="/all-products"
                        className="font-rubik text-primary text-sm ml-4"
                    >
                        See all products
                    </Link>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
