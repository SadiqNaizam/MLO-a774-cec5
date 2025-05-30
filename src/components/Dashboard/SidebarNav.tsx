import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  UserRound,
  FileText,
  ReceiptText,
  ShoppingCart,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Briefcase // Placeholder for 'BO' logo
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
}

interface SidebarNavProps {
  className?: string;
}

const mainNavItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutDashboard, isActive: true },
  { href: '#', label: 'Leads', icon: Users },
  { href: '#', label: 'Customers', icon: UserRound },
  { href: '#', label: 'Proposals', icon: FileText },
  { href: '#', label: 'Invoices', icon: ReceiptText },
  { href: '#', label: 'Items', icon: ShoppingCart },
  { href: '#', label: 'Mail', icon: Mail },
  { href: '#', label: 'Shoebox', icon: Archive },
  { href: '#', label: 'Calendar', icon: CalendarDays },
];

const secondaryNavItems: NavItem[] = [
  { href: '#', label: 'Help', icon: HelpCircle },
  { href: '#', label: 'Settings', icon: Settings },
];

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  return (
    <aside className={cn('w-64 bg-sidebar text-foreground flex flex-col h-screen p-4 space-y-6 fixed top-0 left-0', className)}>
      <div className="flex items-center space-x-2 px-2 py-4 border-b border-border">
        <Briefcase className="h-8 w-8 text-primary" />
        <span className="font-bold text-xl text-prd-primary-text">BO</span>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-1">
          {mainNavItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
                  item.isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-prd-secondary-text hover:bg-muted hover:text-prd-primary-text'
                )}
              >
                <item.icon className={cn('h-5 w-5', item.isActive ? 'text-primary-foreground' : 'text-prd-secondary-text')} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <ul className="space-y-1">
          {secondaryNavItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium text-prd-secondary-text hover:bg-muted hover:text-prd-primary-text',
                  item.isActive && 'bg-primary text-primary-foreground'
                )}
              >
                <item.icon className="h-5 w-5 text-prd-secondary-text" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarNav;
