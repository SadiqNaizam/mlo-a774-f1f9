import React from 'react';
import { Search } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext
} from '@/components/ui/pagination';

// Placeholder data for the customers table
const customers = [
  {
    id: 'cust_001',
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatarUrl: 'https://i.pravatar.cc/40?u=olivia-martin',
    initials: 'OM',
    registeredDate: '2023-07-12',
    totalOrders: 12,
  },
  {
    id: 'cust_002',
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    avatarUrl: 'https://i.pravatar.cc/40?u=jackson-lee',
    initials: 'JL',
    registeredDate: '2023-08-01',
    totalOrders: 8,
  },
  {
    id: 'cust_003',
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    avatarUrl: 'https://i.pravatar.cc/40?u=isabella-nguyen',
    initials: 'IN',
    registeredDate: '2023-09-20',
    totalOrders: 5,
  },
  {
    id: 'cust_004',
    name: 'William Kim',
    email: 'will@email.com',
    avatarUrl: 'https://i.pravatar.cc/40?u=william-kim',
    initials: 'WK',
    registeredDate: '2023-10-05',
    totalOrders: 21,
  },
  {
    id: 'cust_005',
    name: 'Sophia Garcia',
    email: 'sophia.garcia@email.com',
    avatarUrl: 'https://i.pravatar.cc/40?u=sophia-garcia',
    initials: 'SG',
    registeredDate: '2024-01-15',
    totalOrders: 2,
  },
    {
    id: 'cust_006',
    name: 'Liam Martinez',
    email: 'liam.martinez@email.com',
    avatarUrl: 'https://i.pravatar.cc/40?u=liam-martinez',
    initials: 'LM',
    registeredDate: '2024-02-28',
    totalOrders: 1,
  },
];


const CustomersPage = () => {
  console.log('CustomersPage loaded');

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60 w-full">
        <Header title="Customers" />
        <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                      <CardTitle>Customers</CardTitle>
                      <CardDescription>
                        A list of all registered customers.
                      </CardDescription>
                  </div>
                  <div className="relative w-full md:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search customers..."
                      className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                    />
                  </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="hidden md:table-cell">Registered Date</TableHead>
                    <TableHead className="text-right">Total Orders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={customer.avatarUrl} alt={customer.name} />
                            <AvatarFallback>{customer.initials}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{customer.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell className="hidden md:table-cell">{customer.registeredDate}</TableCell>
                      <TableCell className="text-right">{customer.totalOrders}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
           <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CustomersPage;