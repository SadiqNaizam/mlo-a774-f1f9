import React from 'react';
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";

// Custom Layout Components
import Header from '@/components/layout/Header';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import Footer from '@/components/layout/Footer';

// Custom Page-specific Components
import KpiCard from '@/components/KpiCard';
import SalesChart from '@/components/SalesChart';
import RecentActivityItem from '@/components/RecentActivityItem';

// shadcn/ui Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const recentActivities = [
    {
        avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
        avatarFallback: "OM",
        description: (
            <>
                <strong>Olivia Martin</strong> placed an order for the new <strong>Acme Pro Mouse</strong>.
            </>
        ),
        timestamp: "+$1,999.00",
    },
    {
        avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
        avatarFallback: "JL",
        description: (
            <>
                <strong>Jackson Lee</strong> signed up for a new account.
            </>
        ),
        timestamp: "2m ago",
    },
    {
        avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
        avatarFallback: "IS",
        description: (
            <>
                <strong>Isabella Nguyen</strong> placed an order for the <strong>Ergonomic Keyboard</strong>.
            </>
        ),
        timestamp: "+$39.00",
    },
    {
        avatarSrc: "https/i.pravatar.cc/150?u=a042581f4e29026704d",
        avatarFallback: "WK",
        description: (
            <>
                <strong>William Kim</strong>'s subscription for <strong>Acme Cloud Pro</strong> was renewed.
            </>
        ),
        timestamp: "+$299.00",
    },
    {
        avatarSrc: "https/i.pravatar.cc/150?u=a042581f4e29026704e",
        avatarFallback: "SD",
        description: (
            <>
                <strong>Sofia Davis</strong> placed an order for the <strong>Wireless Headphones</strong>.
            </>
        ),
        timestamp: "+$199.00",
    },
];

const Overview = () => {
  console.log('Dashboard/Overview loaded');

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60 w-full">
        <Header title="Dashboard" />
        <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {/* KPI Cards Section */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <KpiCard
                    title="Total Revenue"
                    value="$45,231.89"
                    icon={DollarSign}
                    description="+20.1% from last month"
                />
                <KpiCard
                    title="Subscriptions"
                    value="+2350"
                    icon={Users}
                    description="+180.1% from last month"
                />
                <KpiCard
                    title="Sales"
                    value="+12,234"
                    icon={CreditCard}
                    description="+19% from last month"
                />
                <KpiCard
                    title="Active Now"
                    value="+573"
                    icon={Activity}
                    description="+201 since last hour"
                />
            </div>
            
            {/* Main Content Grid */}
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <SalesChart />
                </div>
                <div className="xl:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>
                                An overview of recent sales and sign-ups.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            {recentActivities.map((activity, index) => (
                                <RecentActivityItem
                                    key={index}
                                    avatarSrc={activity.avatarSrc}
                                    avatarFallback={activity.avatarFallback}
                                    description={activity.description}
                                    timestamp={activity.timestamp}
                                />
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Overview;