import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, UserCircle, ChevronDown, Settings, LogOut, LifeBuoy } from 'lucide-react';

interface TopHeaderProps {
  onToggleSidebar?: () => void;
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onToggleSidebar, className }) => {
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 md:left-64 right-0 h-[70px] bg-card border-b border-border flex items-center justify-between px-6 z-10 shadow-sm',
        className
      )}
    >
      <div className="flex items-center">
        {/* Mobile sidebar toggle - assuming it's hidden on md+ via parent layout logic or specific class here if needed */}
        <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden mr-4">
          <Menu className="h-6 w-6" />
        </Button>
        {/* Placeholder for breadcrumbs or search if needed later */}
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="bg-prd-accent-blue hover:bg-prd-accent-blue/90 text-primary-foreground">
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Customer</DropdownMenuItem>
            <DropdownMenuItem>New Proposal</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback><UserCircle className="h-6 w-6 text-muted-foreground"/></AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
