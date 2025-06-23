import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Placeholder data for products
const products = [
  {
    id: 'prod_001',
    name: 'Ergonomic Office Chair',
    sku: 'SKU-CH-001',
    stock: 120,
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=400&auto=format&fit=crop',
    status: 'in-stock',
  },
  {
    id: 'prod_002',
    name: 'Wireless Mechanical Keyboard',
    sku: 'SKU-KB-002',
    stock: 75,
    price: 119.50,
    imageUrl: 'https://images.unsplash.com/photo-1618384887924-c998c9563b38?q=80&w=400&auto=format&fit=crop',
    status: 'in-stock',
  },
  {
    id: 'prod_003',
    name: '4K UHD Monitor',
    sku: 'SKU-MT-003',
    stock: 8,
    price: 450.00,
    imageUrl: 'https://images.unsplash.com/photo-1527814223364-5d531a51a11b?q=80&w=400&auto=format&fit=crop',
    status: 'low-stock',
  },
  {
    id: 'prod_004',
    name: 'Noise-Cancelling Headphones',
    sku: 'SKU-HP-004',
    stock: 0,
    price: 349.00,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
    status: 'out-of-stock',
  },
  {
    id: 'prod_005',
    name: 'Smart Desk Lamp',
    sku: 'SKU-LP-005',
    stock: 210,
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1620166299949-59b0229562a0?q=80&w=400&auto=format&fit=crop',
    status: 'in-stock',
  },
];

const ProductsPage = () => {
  console.log('ProductsPage loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60">
        <Header title="Products" />
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                  <div>
                      <CardTitle>Products</CardTitle>
                      <CardDescription>
                        Manage your products and view their inventory.
                      </CardDescription>
                  </div>
                  <div className="relative ml-auto flex-1 md:grow-0">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                          type="search"
                          placeholder="Search products..."
                          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                      />
                  </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Avatar className="h-12 w-12 rounded-md">
                          <AvatarImage src={product.imageUrl} alt={product.name} />
                          <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell className="text-muted-foreground">{product.sku}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant={product.status === 'out-of-stock' ? 'destructive' : product.status === 'low-stock' ? 'secondary' : 'default'}>
                          {product.status.replace('-', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </TableCell>
                      <TableCell className="text-right">{product.stock}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-5</strong> of <strong>{products.length}</strong> products
                    </div>
                    <Pagination>
                        <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;