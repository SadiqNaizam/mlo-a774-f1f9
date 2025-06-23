import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizontal, Search } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import Footer from '@/components/layout/Footer';

// Custom UI Components
import StatusBadge from '@/components/StatusBadge';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';


type Order = {
  id: string;
  customer: string;
  email: string;
  date: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  total: string;
};

// Mock data for the orders table
const allOrders: Order[] = [
  { id: 'ORD001', customer: 'Liam Johnson', email: 'liam@example.com', date: '2024-07-15', status: 'delivered', total: '$250.00' },
  { id: 'ORD002', customer: 'Olivia Smith', email: 'olivia@example.com', date: '2024-08-01', status: 'shipped', total: '$150.75' },
  { id: 'ORD003', customer: 'Noah Williams', email: 'noah@example.com', date: '2024-08-10', status: 'pending', total: '$350.50' },
  { id: 'ORD004', customer: 'Emma Brown', email: 'emma@example.com', date: '2024-08-12', status: 'pending', total: '$45.00' },
  { id: 'ORD005', customer: 'Ava Jones', email: 'ava@example.com', date: '2024-07-20', status: 'cancelled', total: '$75.00' },
  { id: 'ORD006', customer: 'James Miller', email: 'james@example.com', date: '2024-08-11', status: 'shipped', total: '$199.99' },
  { id: 'ORD007', customer: 'Sophia Davis', email: 'sophia@example.com', date: '2024-08-13', status: 'pending', total: '$120.00' },
  { id: 'ORD008', customer: 'Isabella Garcia', email: 'isabella@example.com', date: '2024-06-30', status: 'delivered', total: '$89.90' },
  { id: 'ORD009', customer: 'William Rodriguez', email: 'william@example.com', date: '2024-08-14', status: 'pending', total: '$25.00' },
  { id: 'ORD010', customer: 'Mia Martinez', email: 'mia@example.com', date: '2024-07-05', status: 'delivered', total: '$500.00' },
];

const ITEMS_PER_PAGE = 7;

const OrdersPage = () => {
  console.log('OrdersPage loaded');
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return allOrders
      .filter(order => activeTab === 'all' || order.status === activeTab)
      .filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [activeTab, searchTerm]);
  
  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredOrders, currentPage]);

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60">
        <Header title="Orders" />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs value={activeTab} onValueChange={(tab) => {setActiveTab(tab); setCurrentPage(1);}}>
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link to="#">Export</Link>
                </Button>
              </div>
            </div>
            <TabsContent value={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    A list of all orders in your store. You can search by Order ID, name, or email.
                  </CardDescription>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search orders..."
                      className="w-full pl-8 sm:w-[300px]"
                      value={searchTerm}
                      onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedOrders.length > 0 ? (
                        paginatedOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>
                              <div className="font-medium">{order.customer}</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                {order.email}
                              </div>
                            </TableCell>
                            <TableCell>
                              <StatusBadge status={order.status} />
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{order.date}</TableCell>
                            <TableCell className="text-right">{order.total}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>Mark as Shipped</DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            No orders found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>{paginatedOrders.length}</strong> of <strong>{filteredOrders.length}</strong> orders
                  </div>
                  {totalPages > 1 && (
                     <Pagination className="ml-auto">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious href="#" onClick={(e) => {e.preventDefault(); handlePageChange(currentPage - 1);}} />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, i) => (
                             <PaginationItem key={i}>
                                <PaginationLink href="#" isActive={currentPage === i+1} onClick={(e) => {e.preventDefault(); handlePageChange(i+1)}}>
                                  {i + 1}
                                </PaginationLink>
                             </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext href="#" onClick={(e) => {e.preventDefault(); handlePageChange(currentPage + 1);}}/>
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OrdersPage;