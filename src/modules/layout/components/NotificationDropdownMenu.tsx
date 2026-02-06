import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BellIcon, CheckIcon, XCircleIcon } from "lucide-react";
import { NotificationItem, Status } from "./NotificationItem";

const Notifications = [
    {
        id: 1,
        img: "logo.svg",
        title: "Adidas Yeezy Boost",
        price: 220,
        date: "2024-06-01",
        readed: false,
        status: "sold" as Status,
    },
    {
        id: 2,
        img: "logo.svg",
        title: "Adidas Yeezy Boost",
        price: 220,
        date: "2024-06-01",
        readed: false,
        status: "sold" as Status,
    },
    {
        id: 3,
        img: "logo.svg",
        title: "Adidas Yeezy Boost",
        price: 220,
        date: "2024-06-01",
        readed: false,
        status: "sold" as Status,
    },
];

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
                className="px-2 py-4 bg-white border-border/20 text-border w-100"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-rubik px-4 font-bold">
                        Notifications
                    </h2>
                    {Notifications.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            id={notification.id}
                            img={notification.img}
                            title={notification.title}
                            price={notification.price}
                            date={notification.date}
                            readed={notification.readed}
                            status={notification.status}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-between mt-6">
                    <Button
                        variant="ghost"
                        className="px-4 py-2 font-medium uppercase font-rubik text-sm hover:bg-neutral-100"
                    >
                        <CheckIcon className="size-4" />
                        Mark all as read
                    </Button>
                    <Button className="px-4 py-2 bg-black text-white font-normal uppercase font-rubik text-sm hover:bg-neutral-800">
                        View all notification
                    </Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
