import { SearchDropdownMenu } from "./SearchDropdownMenu";
import { NotificationsDropdownMenu } from "./NotificationDropdownMenu";
import { ProfileDropdownMenu } from "./ProfileDropdownMenu";

export function Header() {
    return (
        <nav className="flex items-center justify-end px-15 py-7 w-full h-24 bg-background border-b border-border/20">
            <div className="flex items-center space-x-8">
                <SearchDropdownMenu />
                <NotificationsDropdownMenu />
                <ProfileDropdownMenu />
            </div>
        </nav>
    );
}
