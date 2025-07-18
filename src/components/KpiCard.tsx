import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
  description?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon: Icon, description }) => {
  console.log(`KpiCard loaded: ${title}`);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;