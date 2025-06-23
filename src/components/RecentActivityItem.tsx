import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface RecentActivityItemProps {
  /** The URL for the avatar image. */
  avatarSrc?: string;
  /** The fallback text for the avatar, typically user initials. */
  avatarFallback: string;
  /** The main text description of the activity. */
  description: React.ReactNode;
  /** A human-readable string representing when the event occurred (e.g., "5m ago"). */
  timestamp: string;
}

const RecentActivityItem: React.FC<RecentActivityItemProps> = ({
  avatarSrc,
  avatarFallback,
  description,
  timestamp,
}) => {
  console.log('RecentActivityItem loaded');

  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatarSrc} alt="User Avatar" />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">
          {description}
        </p>
      </div>
      <div className="ml-auto font-medium text-sm text-muted-foreground">
        {timestamp}
      </div>
    </div>
  );
};

export default RecentActivityItem;