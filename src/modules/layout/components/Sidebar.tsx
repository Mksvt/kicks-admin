"use client";
import { Badge } from "@/components/ui/badge";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Sidebar as SidebarComponent,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "../config/nav_items";
import { ChevronDown } from "lucide-react";
import { CATEGORIES } from "../config/categories";

export function Sidebar() {
    const path = usePathname();
    const [activeCategory, setActiveCategory] = useState<string>("");

    return (
        <SidebarComponent className="flex border-r w-65 border-border/20">
            <SidebarHeader className="flex items-center justify-center h-24">
                <Image src="/logo.svg" alt="logo" width={128} height={32} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="px-6">
                    <SidebarGroupContent className="space-y-4">
                        {NAV_ITEMS.map((item) => {
                            const { title, route, Icon } = item;
                            return (
                                <SidebarMenuButton asChild key={route}>
                                    <Link
                                        href={route}
                                        className={cn(
                                            "w-full py-6 px-3 font-rubik font-medium uppercase rounded-2xl",
                                            `${path === route ? "bg-primary text-background pointer-events-none" : ""}`,
                                        )}
                                    >
                                        <Icon />
                                        <span>{title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            );
                        })}
                    </SidebarGroupContent>
                </SidebarGroup>
                <Collapsible className="group/collapsible">
                    <SidebarGroup className="px-6">
                        <SidebarGroupLabel
                            asChild
                            className="px-0 mb-4 cursor-pointer"
                        >
                            <CollapsibleTrigger className="flex items-center justify-between [&>svg]:size-6 pr-2">
                                <span className="font-rubik font-medium text-xl text-foreground">
                                    Categories
                                </span>
                                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent className="space-y-4">
                                {CATEGORIES.map((category) => {
                                    const isActive =
                                        activeCategory === category;
                                    return (
                                        <SidebarMenuItem
                                            key={category}
                                            className="flex items-center justify-between h-9 cursor-pointer"
                                            onClick={() => {
                                                setActiveCategory(category);
                                            }}
                                        >
                                            <span className="font-semibold font-open-sans capitalize text-lg">
                                                {category}
                                            </span>
                                            <Badge
                                                className={cn(
                                                    "px-3 py-2 rounded-lg text-foreground",
                                                    `${isActive ? "bg-primary text-background" : "bg-muted"}`,
                                                )}
                                            >
                                                17
                                            </Badge>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
            </SidebarContent>
        </SidebarComponent>
    );
}
