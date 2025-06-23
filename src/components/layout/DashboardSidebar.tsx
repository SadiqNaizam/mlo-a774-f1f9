import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Package2,
  Home,
  ShoppingCart,
  Package,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardSidebar: React.FC = () => {
  console.log('DashboardSidebar loaded');

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
      { "text-primary bg-muted": isActive }
    );

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/dashboard/-overview" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6 text-primary" />
          <span>Acme Inc.</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-4 px-4 text-sm font-medium">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="/dashboard/-overview" className={navLinkClass}>
              <Home className="h-4 w-4" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={navLinkClass}>
              <ShoppingCart className="h-4 w-4" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={navLinkClass}>
              <Package className="h-4 w-4" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={navLinkClass}>
              <Users className="h-4 w-4" />
              Customers
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;