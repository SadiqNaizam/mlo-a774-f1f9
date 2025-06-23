import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-4">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Acme Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Support</Link>
            <Link to="#" className="hover:text-primary transition-colors">Documentation</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;