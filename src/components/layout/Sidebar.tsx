import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNavContent from '../Dashboard/SidebarNav'; // Actual navigation content
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface SidebarProps {
  isMobileOpen: boolean;
  toggleMobileSidebar: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, toggleMobileSidebar, className }) => {
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={toggleMobileSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out",
          "w-64", // Sidebar width as per requirements
          "bg-sidebar", // Sidebar background color
          "md:translate-x-0", // Visible and in place on medium screens and up
          isMobileOpen ? "translate-x-0" : "-translate-x-full", // Toggles visibility on smaller screens
          className
        )}
        aria-label="Main Sidebar"
      >
        {/* 
          The SidebarNavContent component (from src/components/Dashboard/SidebarNav.tsx) 
          has its own 'fixed' and 'w-64', 'h-screen' classes.
          We override these with '!relative', '!h-full', '!w-full' so it correctly fills this parent <aside>.
        */}
        <SidebarNavContent className="!relative !h-full !w-full" />

        {/* Mobile-only close button, positioned within the sidebar panel */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileSidebar}
          className="absolute top-3 right-3 md:hidden text-muted-foreground hover:text-foreground z-50"
          aria-label="Close sidebar"
        >
          <X className="h-6 w-6" />
        </Button>
      </aside>
    </>
  );
};

export default Sidebar;
