import React from 'react';
import TopHeaderContent from '../Dashboard/TopHeader'; // Actual header content with actions
import { cn } from '@/lib/utils';

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ onToggleMobileSidebar, className }) => {
  // The TopHeaderContent component (from src/components/Dashboard/TopHeader.tsx)
  // is already styled with fixed positioning, height, background, and responsive left margin (md:left-64).
  // It includes the mobile sidebar toggle button.
  // This Header component primarily acts as a wrapper to pass props like onToggleMobileSidebar.
  return (
    <TopHeaderContent 
      onToggleSidebar={onToggleMobileSidebar} 
      className={cn(className)} 
    />
  );
};

export default Header;
