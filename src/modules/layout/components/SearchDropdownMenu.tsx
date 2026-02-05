"use client";
import Image from "next/image";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import { PRODUCTS } from "../constants";
import { useState } from "react";
import {
    InputGroup,
    InputGroupInput,
    InputGroupButton,
} from "@/components/ui/input-group";

export function SearchDropdownMenu() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <DropdownMenu>
            {isSearchOpen ? (
                <InputGroup>
                    <InputGroupInput
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                    />
                    <InputGroupButton>
                        <XIcon onClick={() => setIsSearchOpen(false)} />
                    </InputGroupButton>
                </InputGroup>
            ) : (
                <DropdownMenuTrigger
                    asChild
                    onClick={() => setIsSearchOpen(true)}
                >
                    <Button variant="ghost" className="px-3 py-2">
                        <SearchIcon className="size-5" />
                    </Button>
                </DropdownMenuTrigger>
            )}
            <DropdownMenuContent
                alignOffset={10}
                className="px-2 py-4 border-border/20 text-border"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-rubik px-4 font-bold">
                        Products
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
