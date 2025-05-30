import React, { useState, useCallback } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  const toggleMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen} 
        toggleMobileSidebar={toggleMobileSidebar} 
      />
      <Header onToggleMobileSidebar={toggleMobileSidebar} />
      
      {/* Main content area */}
      <main
        className={cn(
          "p-6", // Padding for the content area as per mainContent.layout
          "mt-[70px]", // Margin top to account for the fixed Header's height (70px)
          "md:ml-64", // Margin left on medium screens and up to account for the fixed Sidebar's width (w-64 = 256px)
          "min-w-0", // Ensures content can shrink in flex/grid layouts, from mainContent.sizing
          "overflow-y-auto", // Allows scrolling for content taller than viewport, from mainContent.sizing
          // To make this <main> element the sole scroller for its content (not the body),
          // it would need a defined height, e.g., h-[calc(100vh-70px)].
          // Current setup allows body scroll if main content is very tall.
          "flex-1" // If the parent div was flex, this would make it take remaining space.
                   // With fixed sidebar/header, this ensures it tries to fill available width if not constrained by ml-64.
        )}
      >
        {/* Inner container for content structure, as per mainContent.container */}
        <div className="flex flex-col gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
