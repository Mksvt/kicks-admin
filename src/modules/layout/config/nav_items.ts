import {
    FileTextIcon,
    GalleryVerticalEndIcon,
    LayoutDashboardIcon,
    LucideIcon,
} from "lucide-react";

type NavItem = {
    title: string;
    Icon: LucideIcon;
    route: string;
};

export const NAV_ITEMS: NavItem[] = [
    {
        title: "Dashboard",
        Icon: LayoutDashboardIcon,
        route: "/",
    },
    {
        title: "All products",
        Icon: GalleryVerticalEndIcon,
        route: "/all-products",
    },
    {
        title: "Order list",
        Icon: FileTextIcon,
        route: "/order-list",
    },
];
