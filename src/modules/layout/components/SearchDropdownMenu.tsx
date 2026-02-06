"use client";
import { Button } from "@/components/ui/button";
import { SearchIcon, XCircleIcon } from "lucide-react";

import { useState } from "react";
import Image from "next/image";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { PRODUCTS } from "../constants";
import Link from "next/link";

export function SearchDropdownMenu() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            {isSearchOpen ? (
                <div className="relative flex items-center">
                    <Popover
                        open={isSearchOpen}
                        onOpenChange={(open) =>
                            !searchQuery && setIsSearchOpen(open)
                        }
                    >
                        <PopoverTrigger asChild>
                            <div className="relative flex items-center">
                                <Input
                                    className="w-50 pr-8"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    placeholder="Search..."
                                />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 h-full hover:bg-transparent text-primary "
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                    }}
                                >
                                    <XCircleIcon />
                                </Button>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent
                            alignOffset={10}
                            className="px-2 py-4 bg-white border-border/20 text-border"
                        >
                            <div className="flex flex-col gap-2 ">
                                <h2 className="text-xl font-rubik px-4 font-bold">
                                    Products
                                </h2>
                                {PRODUCTS.map((product) => (
                                    <div
                                        key={product.name}
                                        className="flex items-center font-open-sans font-semibold cursor-pointer px-4 py-3 hover:bg-muted rounded-md gap-2"
                                    >
                                        <Image
                                            height={40}
                                            width={40}
                                            src={product.img}
                                            alt={product.name}
                                        />

                                        {product.name}
                                    </div>
                                ))}

                                <Link
                                    href="/all-products"
                                    className="font-rubik text-primary text-sm ml-4"
                                >
                                    See all products
                                </Link>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            ) : (
                <Button
                    variant="ghost"
                    className="px-3 py-2 "
                    onClick={() => setIsSearchOpen(true)}
                >
                    <SearchIcon className="size-5 " />
                </Button>
            )}
        </div>
    );
}
