import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Clock,
  Truck,
  CheckCircle,
  XCircle,
  HelpCircle
} from 'lucide-react';

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface StatusConfig {
  label: string;
  variant: BadgeVariant;
  icon: React.ElementType;
  className?: string;
}

const statusMap: Record<string, StatusConfig> = {
  pending: {
    label: "Pending",
    variant: "secondary",
    icon: Clock,
  },
  shipped: {
    label: "Shipped",
    variant: "default",
    icon: Truck,
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100/80"
  },
  delivered: {
    label: "Delivered",
    variant: "default",
    icon: CheckCircle,
    className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100/80"
  },
  cancelled: {
    label: "Cancelled",
    variant: "destructive",
    icon: XCircle,
  },
};

const defaultStatus: StatusConfig = {
  label: "Unknown",
  variant: "outline",
  icon: HelpCircle,
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  console.log('StatusBadge loaded with status:', status);

  const normalizedStatus = status.toLowerCase();
  const config = statusMap[normalizedStatus] || { ...defaultStatus, label: status };
  const Icon = config.icon;

  return (
    <Badge
      variant={config.variant}
      className={cn(
        "flex items-center gap-1.5 whitespace-nowrap font-medium capitalize",
        config.className,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{config.label}</span>
    </Badge>
  );
};

export default StatusBadge;