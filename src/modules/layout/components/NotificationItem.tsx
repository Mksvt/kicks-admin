import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Image from "next/image";

export type Status = "sold" | "pending" | "canceled";

interface NotificationItemProps {
    id: number;
    img: string;
    title: string;
    price: number;
    date: string;
    readed: boolean;
    status: Status;
}

export function NotificationItem({
    img,
    title,
    price,
    date,
    readed,
    status,
}: NotificationItemProps) {
    return (
        <DropdownMenuItem className="bg-background flex items-start p-2 flex-row border-none justify-between">
            <div className="flex items-center gap-4">
                <Image
                    alt="Notification Image"
                    src={img}
                    width={64}
                    height={64}
                />
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold font-open-sans text-base">
                        {title}
                    </h3>

                    <p className="text-sm font-semibold font-open-sans">
                        {price}$
                    </p>
                    <p className="text-xs font-open-sans text-muted-foreground">
                        {date}
                    </p>
                </div>
            </div>

            <Badge className="capitalize rounded-sm!">{status}</Badge>
        </DropdownMenuItem>
    );
}
